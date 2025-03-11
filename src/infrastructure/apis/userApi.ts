import { UserInfo } from '@/infrastructure/entities/UserInfo'
import { AxiosResponse } from 'axios'
import axiosClient from '../axiosClient'
import { UserInfoEnpoint } from '../enums/userInfoEndpoint'

export function userApi() {
  function getUserInfo(): Promise<AxiosResponse<UserInfo>> {
    return axiosClient.get(UserInfoEnpoint.Employee)
  }
  return {
    getUserInfo
  }
}
