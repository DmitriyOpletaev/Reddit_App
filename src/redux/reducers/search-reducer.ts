import {BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {redditCommunityAPI} from "../../api/community"
import {SearchCommunitiesResults} from "../../types/redux_types/communities-types"
import {createSearchCommunitiesResult} from "../../helpers/createSearchCommunitiesResult"
import {apiErrors} from "../../helpers/api-errors";


const initialState = {
    isSearching: false,
    communitiesSearchResults: [] as Array<SearchCommunitiesResults>,
    error: null as string | null
}

export const searchReducer = (state = initialState, action: Actions): InitialState => {
    switch (action.type) {
        case 'REDDIT/SET_IS_SEARCHING':
            return {
                ...state, isSearching: action.payload
            }
        case 'REDDIT/SET_SEARCH_RESULTS':
            return {
                ...state,
                communitiesSearchResults: action.payload
            }
        default:
            return state
    }
}

enum ActionType {
    setError = 'REDDIT/SET_SEARCH_ERROR',
    setIsLoading = 'REDDIT/SET_IS_SEARCHING',
    setSearchResults = 'REDDIT/SET_SEARCH_RESULTS'
}
export const searchActions = {
    setIsLoading: (isSearching: InitialState['isSearching']) => ({
        type: ActionType.setIsLoading,
        payload: isSearching
    } as const),
    setSearchResults: (communitiesSearchResults: InitialState['communitiesSearchResults']) => ({
        type: ActionType.setSearchResults,
        payload: communitiesSearchResults
    } as const),
    setError: (error: InitialState['error']) => ({
        type: ActionType.setError,
        payload: error
    } as const)
}


export const searchCommunities = (accessToken: string, searchTerm: string): ThunkType => async (dispatch) => {
    try {
        dispatch(searchActions.setIsLoading(false))
        const {subreddits} = await redditCommunityAPI.searchCommunity(accessToken, searchTerm)
        if (subreddits.length > 0) {
            dispatch(searchActions.setSearchResults(createSearchCommunitiesResult(subreddits)))
        } else {
            dispatch(searchActions.setError('Группи не знайдені'))
        }
    } catch (error) {
        dispatch(searchActions.setError(apiErrors(error)))
    } finally {
        dispatch(searchActions.setIsLoading(false))
    }
}


type Actions = InferActionsTypes<typeof searchActions>
type ThunkType = BaseThunkType<Actions>
type InitialState = typeof initialState



