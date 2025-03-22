import { AxiosResponse } from 'axios'
import axiosClient from '../axiosClient'
import { AuthenticationEndpoint } from '../enums/authenticationEndpoint'
import { ApiResult } from '../../shared/ApiResult'
import { Menu } from '../entities/Authentication'

export function authenticationApi() {
  function login(credentials: { email: string; password: string }): Promise<AxiosResponse<string>> {
    return axiosClient.post(AuthenticationEndpoint.Login, credentials)
  }

  function getMenu(employeeId: string): Promise<AxiosResponse<ApiResult<Menu[]>>> {
    return axiosClient.get(AuthenticationEndpoint.Menu, { params: { employeeId } })
  }
  return {
    login,
    getMenu
  }
}
