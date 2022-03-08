import {AppState, BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {GetPostsParamsType, RedditPostsAPI, SortType} from "../../api/requests/Posts_API"
import {createPosts} from "../../helpers/createPost";

type Actions = InferActionsTypes<typeof actionsPosts>
type ThunkType = BaseThunkType<Actions>
type InitialStateType = typeof initialState
export type PostsType = {
    postId:string
    postFullName:string
    author: {
        authorId:string
        authorName: string,
    },
    community:{
        communityId:string
        communityIcon:string
        communityName:string
    }
    createdTime:number
    commentsCount:number
    over18:boolean
    title: string,
    selfText: string,
    thumbnail?:string,
    video?:string
}



let initialState = {
    isLoadingPosts: false,
    posts: [] as PostsType[]
}


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


export const actionsPosts = {
    setIsLoading: (isLoadingPosts: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING_POSTS', payload: isLoadingPosts
    } as const),
    setPosts: (posts: Array<PostsType>) => ({
        type: 'REDDIT/SET_POSTS', payload: posts
    } as const),
}


export const getPosts = (accessToken: string,
                         sort:SortType,
                         subredditName:string|null=null,
                         searchParams:GetPostsParamsType={}): ThunkType => async (dispatch) => {
    try {
        dispatch(actionsPosts.setIsLoading(true))
        const data = await RedditPostsAPI.getPosts(accessToken,sort,subredditName,searchParams)
        const posts = createPosts(data)
        dispatch(actionsPosts.setPosts(posts))
    } catch (err) {
        alert('error getPosts')
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

