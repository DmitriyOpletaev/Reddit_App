import {AppState} from "../Redux_Store";

export const postsSelector = {
    posts: (state: AppState) => {
        return state.postsReducer.posts
    },
    isLoadingPosts: (state: AppState) => {
        return state.postsReducer.isLoadingPosts
    },
}