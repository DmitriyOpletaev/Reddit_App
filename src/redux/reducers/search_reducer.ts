import {AppState, BaseThunkType, InferActionsTypes} from "../Redux_Store";
import {RedditSearchAPI} from "../../api/requests/search";
import {createSearchResultsWithArrays} from "../../helpers/createSearchResults";



const initialState = {
    isSearching: false,
    communitiesSearchResult: null as Array<Community> | null,
    linksSearchResults: null as Array<Link> | null,
    accountsSearchResults: null as Array<Account> | null,
}
export const searchSelector = {
    isSearching: (state: AppState) => state.searchReducer.isSearching,
    communitiesSearchResult: (state: AppState) => state.searchReducer.communitiesSearchResult,
    accountsSearchResults: (state: AppState) => state.searchReducer.accountsSearchResults,
    linksSearchResults: (state: AppState) => state.searchReducer.linksSearchResults,
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
                communitiesSearchResult: action.payload.communities,
                accountsSearchResults: action.payload.accounts,
                linksSearchResults: action.payload.links,
            }
        default:
            return state
    }
}


const searchActions = {
    setIsLoading: (isSearching: boolean) => ({
        type: 'REDDIT/SET_IS_SEARCHING', payload: isSearching
    } as const),
    setSearchResults: (
        communities: Array<Community> | null = null,
        links: Array<Link> | null = null,
        accounts: Array<Account> | null = null
    ) => ({
        type: 'REDDIT/SET_SEARCH_RESULTS', payload: {communities, accounts, links}
    } as const),
}

export const search = (accessToken: string, searchQuery: string): ThunkType => async (dispatch) => {
    try {
        dispatch(searchActions.setIsLoading(true))
        const data = await RedditSearchAPI.searchCommunitiesOrUsers(accessToken,'community',{q:searchQuery})
        const data2 = await RedditSearchAPI.searchCommunitiesOrUsers(accessToken,'user',{q:searchQuery})
        const {communitiesArray,accountsArray,linksArray} = createSearchResultsWithArrays([data,data2])
        dispatch(searchActions.setSearchResults(communitiesArray,linksArray,accountsArray))
    } catch (error) {
        alert('error search Thunk')
    } finally {
        dispatch(searchActions.setIsLoading(false))
    }
}






type Actions = InferActionsTypes<typeof searchActions>
type ThunkType = BaseThunkType<Actions>
type InitialState = typeof initialState

export type Community = {
    communityName: string
    communityAvatar: string | null
    subscribersCount: number | null
    communityId: string
    redditFullName:string
    keyColor: string | null
    isUserSubscriber:boolean|null
}
export type Account = {
    accountId: string | null
    accountName: string
    accountAvatar:string|null
}
export type Link = {
    authorName: string
    linkTitle: string
    linkId: string
}




