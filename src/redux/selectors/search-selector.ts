import {AppState} from "../Redux_Store";

export const searchSelector = {
    isSearching: (state: AppState) => state.searchReducer.isSearching,
    communitiesSearchResults: (state: AppState) => state.searchReducer.communitiesSearchResults,
}