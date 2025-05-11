import { AxiosResponse } from 'axios'
import { Recruitment } from '../entities/Recruitment'
import { Result } from '../entities/shared/Result'
import axiosClient from '../axiosClient'
import { RecruitmentEndpoint } from '../enums/recruitmentEndpoint'
import { PagingResultBase } from '../entities/shared/PagingResultBase'

export function recruitmentApi() {
  function getRecruitmentPaging(
    pageIndex: number,
    pageSize: number
  ): Promise<AxiosResponse<Result<PagingResultBase<Recruitment[]>>>> {
    return axiosClient.get(RecruitmentEndpoint.Recruitment, { params: { pageIndex, pageSize } })
  }
  return {
    getRecruitmentPaging
  }
}
