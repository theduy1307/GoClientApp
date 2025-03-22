import { authenticationApi } from '@/infrastructure/apis/authenticationApi'
import { userApi } from '@/infrastructure/apis/userApi'
import { UserInfo } from '@/infrastructure/entities/UserInfo'
import constants from '@/utils/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSnackbarStore } from '@/shared/store/snackbar'
import { Menu } from '@/infrastructure/entities/Authentication'
import { AxiosResponse } from 'axios'
import { ApiResult } from '../ApiResult'

export const useUserStore = defineStore('user', () => {
  const route = useRoute()
  const userInfo = ref<UserInfo>({
    id: '',
    fullName: '',
    accessToken: localStorage.getItem(constants.ACCESS_TOKEN) ?? '',
    roleIds: [],
    email: ''
  })
  const listMenus = ref<Menu[]>([])
  const { getUserInfo } = userApi()
  const { login, getMenu } = authenticationApi()
  const redirectUrl = route.query.redirectUrl || '/dashboard'
  const router = useRouter()
  const snackbarStore = useSnackbarStore()
  const isAuthenticated = computed(() => !!userInfo.value.accessToken)
  // Hàm login: Gửi email & password, lấy token về
  const userLogin = async (email: string, password: string) => {
    try {
      const { data } = await login({ email, password })

      localStorage.setItem(constants.ACCESS_TOKEN, data)
      userInfo.value.accessToken = data
      router.push(redirectUrl as string)
      snackbarStore.showSnackbar('Đăng nhập thành công', 'success', 3000)
      await getUser() // Gọi API lấy thông tin user sau khi login
      return true
    } catch (error) {
      console.error('Login failed', error)
      return false
    }
  }

  // Hàm lấy thông tin user
  const getUser = async () => {
    try {
      const { data } = await getUserInfo() // Gọi API lấy thông tin user sau khi login
      userInfo.value = data
      await getUserMenu()
    } catch (error) {
      if ((error as any).response && (error as any).response.status == 401) {
        router.push(`/authentication/sign-in`)
      }
      userInfo.value = { id: '', fullName: '', accessToken: '', roleIds: [], email: '' }
      console.error('Failed to fetch user info', error)
      //logout() // Nếu lỗi token, logout
    }
  }

  // Hàm lấy thông tin user
  const getUserMenu = async () => {
    await getMenu(userInfo.value.id).then((response: AxiosResponse<ApiResult<Menu[]>>) => {
      listMenus.value = response.data.value ?? []
    })
  }

  // Hàm logout
  const logout = () => {
    userInfo.value = { id: '', fullName: '', accessToken: '', roleIds: [], email: '' }
    localStorage.removeItem(constants.USER_INFO)
    localStorage.removeItem(constants.ACCESS_TOKEN)
  }

  return { userInfo, listMenus, isAuthenticated, logout, userLogin, getUser, getUserMenu }
})
