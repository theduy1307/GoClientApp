export type ApiResult<T> = {
  value: T
  isSuccess: boolean
  isFailure: boolean
  error: Error
}
export type Error = {
  code: string
  message: string
}
