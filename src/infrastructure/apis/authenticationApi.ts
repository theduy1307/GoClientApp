import { UserInfo } from '@/infrastructure/entities/UserInfo'
import { AxiosResponse } from 'axios'
import axiosClient from '../axiosClient'
import { UserInfoEnpoint } from '../enums/userInfoEndpoint'
import { AuthenticationEndpoint } from '../enums/authenticationEndpoint'

export function authenticationApi() {
  function login(): Promise<AxiosResponse<string>> {
    return axiosClient.get(AuthenticationEndpoint.Login)
  }
  return {
    login
  }
}
