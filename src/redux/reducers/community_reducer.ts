import {AppState, BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {SubscribesAction} from "../../types/reducers_types/communityReducer_types";
import {redditCommunityAPI} from "../../api/requests/community";



let initialState = {
    a:'asd'
}
type InitialState = typeof initialState

export const communityReducer = (state = initialState, action: Actions): InitialState => {

    switch (action.type) {
        case 'REDDIT/SET_IS_LOADING':
            return {
                ...state, a: "asd"
            }

        default:
            return state
    }
}

type Actions = InferActionsTypes<typeof communityActions>
type ThunkType = BaseThunkType<Actions>

const communityActions = {
    setIsLoading: (isLoading: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING', payload: isLoading
    } as const),
}


export const subscribeOrUnsubscribeCommunity = (
    accessToken:string,
    action:SubscribesAction,
    communityName:string
): ThunkType => async (dispatch) => {
    try {
        const data = await redditCommunityAPI.subscribeOrUnsubscribeCommunity(accessToken,action,communityName)
        console.log(data)
    } catch (err) {
        alert('error subscribeOrUnsubscribeCommunity')
    } finally {

    }
}

export const getUserSubscribersCommunities=(
    accessToken:string
):ThunkType=>async (dispatch)=>{
    try{
        const data = await redditCommunityAPI.userSubscribersCommunities(accessToken)
        console.log(data)
    }
    catch (error){
        alert('error getUserSubscribersCommunities')
    }
}



