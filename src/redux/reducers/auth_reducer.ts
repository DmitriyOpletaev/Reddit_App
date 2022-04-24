import {BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {RedditAuthAPI} from "../../api/requests/auth";
import {appLocalStorage} from "../../helpers/localStorage";


let initialState = {
    isLoadingAuthentication: false,
    isUserAuthorise: false,
    accessToken: null as string | null,
    accessTokenExpiresIn: null as number | null,
    refreshToken: null as string | null,
}
type InitialState = typeof initialState

const authReducer = (state = initialState, action: Actions): InitialState => {

    switch (action.type) {
        case 'REDDIT/SET_IS_LOADING':
            return {
                ...state, isLoadingAuthentication: action.payload
            }
        case 'REDDIT/SET_USER_AUTH_TOKENS':
            const {refreshToken, accessToken, isUserAuthorise} = action.payload
            return {
                ...state, isUserAuthorise, accessToken, refreshToken
            }
        default:
            return state
    }
}

type Actions = InferActionsTypes<typeof authActions>
type ThunkType = BaseThunkType<Actions>

const authActions = {
    setIsLoading: (isLoading: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING', payload: isLoading
    } as const),
    setUserAuthTokens: (isUserAuthorise: boolean, accessToken: string, accessTokenExpiresIn: number, refreshToken: string | null = null) => ({
        type: 'REDDIT/SET_USER_AUTH_TOKENS', payload: {isUserAuthorise, accessToken, refreshToken}
    } as const),
}


export const getAuthAccessToken = (authCode: string): ThunkType => async (dispatch) => {
    try {
        dispatch(authActions.setIsLoading(true))
        const {access_token, refresh_token, expires_in} = await RedditAuthAPI.getAuthAccessToken(authCode)
        dispatch(authActions.setUserAuthTokens(true, access_token, expires_in, refresh_token))
        appLocalStorage.setItem('refreshToken',refresh_token)
    } catch (err) {
        alert('error getAuthAccessToken')
    } finally {
        dispatch(authActions.setIsLoading(false))
    }
}
export const refreshAuthAccessToken = (refreshToken: string): ThunkType => async (dispatch) => {
    try {
        dispatch(authActions.setIsLoading(true))
        const {access_token, refresh_token, expires_in} = await RedditAuthAPI.refreshAuthAccessToken(refreshToken)
        dispatch(authActions.setUserAuthTokens(true, access_token, expires_in, refresh_token))
        appLocalStorage.setItem('refreshToken',refresh_token)
    } catch (err) {
        alert('error refreshAuthAccessToken')
    } finally {
        dispatch(authActions.setIsLoading(false))
    }
}

export const getNoneAuthAccessToken = (): ThunkType => async (dispatch) => {
    try {
        dispatch(authActions.setIsLoading(true))
        const {access_token, expires_in} = await RedditAuthAPI.getNoneAuthAccessToken()
        dispatch(authActions.setUserAuthTokens(false, access_token, expires_in))
    } catch (error) {
        alert('error getNoneAuthAccessToken')
    } finally {
        dispatch(authActions.setIsLoading(false))
    }
}

export const logoutThunk = (accessToken: string | null = null, refreshToken: string | null = null): ThunkType => async (dispatch) => {
    try {
        await dispatch(getNoneAuthAccessToken())
        refreshToken && await RedditAuthAPI.revokeToken(refreshToken, 'refresh_token')
        accessToken && await RedditAuthAPI.revokeToken(accessToken, 'access_token')
        appLocalStorage.removeItem('refreshToken')
    } catch (error) {
        alert('error logoutThunk')
    }
}


export default authReducer

