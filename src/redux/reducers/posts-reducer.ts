import {InferActionsTypes} from "../Redux_Store"
import {PostData} from "../../types/redux_types/posts-types"
import {changeArrayElement, changeArrayElement2} from "../../helpers/changeArrayElement";


let initialState = {
    isLoadingPosts: false,
    posts: [] as PostData[],
    error: null as string | null,
    nextPageToken: null as string | null
}


const postsReducer = (state = initialState, action: PostsActions): InitialStateType => {
    switch (action.type) {
        case 'REDDIT/SET_IS_LOADING_POSTS':
            return {
                ...state, isLoadingPosts: action.payload
            }
        case 'REDDIT/SET_POSTS':
            return {
                ...state,
                posts: action.payload.posts,
                nextPageToken: action.payload.nextPageToken
            }
        case "REDDIT/SET_MORE_POSTS":
            return {
                ...state,
                posts: state.posts.concat(action.payload.posts),
                nextPageToken: action.payload.nextPageToken
            }
        case 'REDDIT/SET_ERROR_LOADING_POSTS':
            return {
                ...state, error: action.payload
            }
        case 'REDDIT/SET_COMMUNITY_SUBSCRIBE':
            return {
                ...state,
                posts: changeArrayElement2(action.payload.communityId, action.payload.userIsSubscribe, state.posts)
            }
        case 'REDDIT/SET_IS_LOADING_SUBSCRIBE_COMMUNITY':
            return {
                ...state, posts: changeArrayElement(action.payload.communityId, action.payload.isLoading, state.posts)
            }
        default:
            return state
    }
}


export const postsActions = {
    setIsLoading: (isLoadingPosts: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING_POSTS', payload: isLoadingPosts
    } as const),
    setPosts: (posts: Array<PostData>, nextPageToken: string | null) => ({
        type: 'REDDIT/SET_POSTS', payload: {posts, nextPageToken}
    } as const),
    setMorePost: (posts: Array<PostData>, nextPageToken: string | null) => ({
        type: 'REDDIT/SET_MORE_POSTS', payload: {posts, nextPageToken}
    } as const),
    setError: (error: string) => ({
        type: 'REDDIT/SET_ERROR_LOADING_POSTS', payload: error
    } as const),
    setSubscribeCommunity: (communityId: PostData['community']['communityId'],
                            userIsSubscribe: boolean) => ({
        type: 'REDDIT/SET_COMMUNITY_SUBSCRIBE', payload: {communityId, userIsSubscribe}
    } as const),
    setIsLoadingSubscribeCommunity: (communityId: PostData['community']['communityId'],
                                     isLoading: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING_SUBSCRIBE_COMMUNITY', payload: {communityId, isLoading}
    } as const)
} as const




export default postsReducer

export type PostsActions = InferActionsTypes<typeof postsActions>

type InitialStateType = typeof initialState




















