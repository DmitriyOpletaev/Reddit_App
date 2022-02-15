import {AppState, BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {PostsKey, RedditPostsAPI} from "../../api/requests/Posts_API"

type PostsType = {
    kind: string,
    author: {
        author: string,
    },
    title: string,
    selftext: string,
    thumbnail?:string,
    video?:string


}
let initialState = {
    isLoadingPosts: false,
    posts: [] as PostsType[]

}
type InitialStateType = typeof initialState

const postsReducer = (state = initialState, action: Actions): InitialStateType => {

    switch (action.type) {
        case 'REDDIT/SET_IS_LOADING_POSTS':
            return {
                ...state, isLoadingPosts: action.payload
            }
        case 'REDDIT/SET_POSTS':
            return {
                ...state, posts: action.payload
            }
        default:
            return state
    }
}

type Actions = InferActionsTypes<typeof actionsPosts>
type ThunkType = BaseThunkType<Actions>

export const actionsPosts = {
    setIsLoading: (isLoadingPosts: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING_POSTS', payload: isLoadingPosts
    } as const),
    setPosts: (posts: Array<PostsType>) => ({
        type: 'REDDIT/SET_POSTS', payload: posts
    } as const),
}


export const getPosts = (postKey: PostsKey, accessToken: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actionsPosts.setIsLoading(true))
        const data = await RedditPostsAPI.getPosts(postKey, accessToken)
        console.log(data)
        const posts: Array<PostsType> = data.data.children.map((e) => {
                return ({
                    kind: e.kind,
                    title: e.data.title,
                    author: {author: e.data.author},
                    selftext: e.data.selftext,
                    thumbnail:e.data.url,
                    video:e.data.media?.reddit_video?.fallback_url
                })
            }
        )
        dispatch(actionsPosts.setPosts(posts))
    } catch (err) {
        alert('error getUserAccessToken')
    } finally {
        dispatch(actionsPosts.setIsLoading(false))
    }
}


export const postsSelector = {
    posts: (state: AppState) => {
        return state.postsReducer.posts
    },
    isLoadingPosts: (state: AppState) => {
        return state.postsReducer.isLoadingPosts
    },
}
export default postsReducer

