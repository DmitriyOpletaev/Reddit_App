import {AppState} from "../Redux_Store";

export const authSelector={
    accessToken:(state:AppState)=>state.authReducer.accessToken,
    refreshToken:(state:AppState)=>state.authReducer.refreshToken,
    isLoadingAuthentication: (state:AppState)=>state.authReducer.isLoadingAuthentication,
    isUserAuthorise:(state:AppState)=>state.authReducer.isUserAuthorise,
    accessTokenExpiresIn: (state:AppState)=>state.authReducer.accessTokenExpiresIn,
}