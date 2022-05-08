import {BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {redditCommunityAPI} from "../../api/community";
import {ApiRequest} from "../../types/api_types/request-types";
import {apiErrors} from "../../helpers/api-errors";
import {postsActions} from "./posts-reducer";


let initialState = {
    isLoadingCommunityInfo: false
}


export const communityReducer = (state = initialState, action: Actions): InitialState => {

    switch (action.type) {
        case 'REDDIT/SET_IS_LOADING':
            return {
                ...state,
                isLoadingCommunityInfo: action.payload
            }


        default:
            return state
    }
}



const communityActions = {
    setIsLoading: (isLoading: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING', payload: isLoading
    } as const),
}

export const subscribeCommunity = (accessToken: string,
                                   communityId: string,
                                   subsAction: ApiRequest['subscribeCommunityParams']['action']
): ThunkType => async (dispatch) => {
    try {
        dispatch(postsActions.setIsLoadingSubscribeCommunity(communityId,true))
        await redditCommunityAPI.subscribeCommunity(accessToken, communityId, subsAction)
        dispatch(postsActions.setSubscribeCommunity(communityId,subsAction==='sub'))
    } catch (error) {
        const err = apiErrors(error)
    }
    finally {
        dispatch(postsActions.setIsLoadingSubscribeCommunity(communityId,false))
    }
}



type InitialState = typeof initialState
type Actions = InferActionsTypes<typeof communityActions|SubscribingPostsActions>
type SubscribingPostsActions = Pick<typeof postsActions, 'setSubscribeCommunity'|'setIsLoadingSubscribeCommunity'>
type ThunkType = BaseThunkType<Actions>
