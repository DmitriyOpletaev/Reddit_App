import {AuthTokens} from "../../types/api_types/Auth_Types"
import {credentialsReddit, instanceAuthReddit} from "../Reddit_API";



export const RedditAuthAPI = {
    getAccessToken: (authCode: string) => {
        return instanceAuthReddit.post<AuthTokens>(
            'access_token',
            `grant_type=authorization_code&code=${authCode}&redirect_uri=${credentialsReddit.redirectUri}`
        ).then(res => res.data)
    },
    refreshingToken:(refreshToken: string) => {
        return instanceAuthReddit.post<AuthTokens>(
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

















