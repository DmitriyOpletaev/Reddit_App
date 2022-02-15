import {AppState, BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {AuthTokens} from "../../api/types_API/Auth_Types";
import {RedditAuthAPI} from "../../api/requests/auth_api";


let initialState = {
    userAuthTokens: null as AuthTokens | null,
    isLoadingAuthentication: false
}
type InitialState = typeof initialState

const authReducer = (state = initialState, action: Actions): InitialState => {

    switch (action.type) {
        case 'REDDIT/SET_IS_LOADING':
            return {
                ...state, isLoadingAuthentication: action.payload
            }
        case 'REDDIT/SET_USER_AUTH_TOKENS':
            return {
                ...state, userAuthTokens: action.payload
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
    setUserAuthTokens: (userAuthTokens: AuthTokens) => ({
        type: 'REDDIT/SET_USER_AUTH_TOKENS', payload: userAuthTokens
    } as const),
}


export const getAccessToken = (code: string, type:'RETRIEVAL'|'REFRESHING' = 'REFRESHING'): ThunkType => async (dispatch) => {
    try {
        dispatch(authActions.setIsLoading(true))
        const data = type === 'REFRESHING'
            ? await RedditAuthAPI.refreshingToken(code)
            : await RedditAuthAPI.getAccessToken(code)
        dispatch(authActions.setUserAuthTokens(data))
        localStorage.setItem('refreshToken',data.refresh_token)
        setInterval(async ()=>{
            await dispatch(getAccessToken(data.refresh_token,'REFRESHING'))
        },data.expires_in*1000-30000)
    } catch (err) {
        alert('error getUserAccessToken')
    } finally {
        dispatch(authActions.setIsLoading(false))
    }
}

export const authSelector={
    userAuthTokens:(state:AppState)=>{return state.authReducer.userAuthTokens},
    isLoadingAuthentication:(state:AppState)=>{return state.authReducer.isLoadingAuthentication},
}

export default authReducer

