export interface NonAuthTokenResponse{
    access_token:string
    token_type: string
    expires_in: number
    scope: string
}
export interface AuthTokensResponse extends NonAuthTokenResponse{
    refresh_token: string
}
