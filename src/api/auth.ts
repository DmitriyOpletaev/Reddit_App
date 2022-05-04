import {credentialsReddit, instanceAuthReddit} from "./index-api"
import {AuthTokensResponse, NonAuthTokenResponse} from "../types/api_types/auth_types";



export const RedditAuthAPI = {
    getAuthAccessToken: (authCode: string) => {
        return instanceAuthReddit.post<AuthTokensResponse>(
            'access_token',
            `grant_type=authorization_code&code=${authCode}&redirect_uri=${credentialsReddit.redirectUri}`
        ).then(res => res.data)
    },
    getNoneAuthAccessToken:()=>{
        return instanceAuthReddit.post<NonAuthTokenResponse>(
            'access_token',
            `grant_type=client_credentials`
        ).then(res=>res.data)
    },
    refreshAuthAccessToken:(refreshToken: string) => {
        return instanceAuthReddit.post<AuthTokensResponse>(
            'access_token',
            `grant_type=refresh_token&refresh_token=${refreshToken}`
            ).then(res=>res.data)
    },
    revokeToken:(token:string,type:'refresh_token'|'access_token')=>{
        return instanceAuthReddit.post(
            'revoke_token',
            `token=${token}&token_type_hint=${type}`
        ).then(res=>res)
    }

}

















