import {BaseThunkType} from "../Redux_Store"
import {ApiRequest, CommunityPostsSort, UserPostsSort} from "../../types/api_types/request-types"
import {redditPostsAPI} from "../../api/posts"
import {createPosts} from "../../helpers/createPost"
import {apiErrors} from "../../helpers/api-errors"
import {PostsActions, postsActions} from "./posts-reducer"
import {PostData} from "../../types/redux_types/posts-types";



export const getPosts = (
    accessToken: string,
    sort: CommunityPostsSort,
    subredditName: string | null = null,
    nextPageToken?: string
): ThunkType => async (dispatch) => {
    try {
        dispatch(postsActions.setIsLoading(true))
        const data = await redditPostsAPI.getCommunityPosts(accessToken, sort, subredditName, nextPageToken)
        const posts = createPosts(data)
        nextPageToken
            ? dispatch(postsActions.setMorePost(posts, data.data.after))
            : dispatch(postsActions.setPosts(posts, data.data.after))
    } catch (err) {
        dispatch(postsActions.setError(apiErrors(err)))
    } finally {
        dispatch(postsActions.setIsLoading(false))
    }
}


export const getUserPosts = (
    accessToken: string,
    userName: string,
    sort: UserPostsSort,
    nextPageToken?: string
): ThunkType => async (dispatch) => {
    try {
        dispatch(postsActions.setIsLoading(true))
        const data = await redditPostsAPI.getUserPosts(accessToken, userName, sort, nextPageToken)
        const posts = createPosts(data)
        nextPageToken
            ? dispatch(postsActions.setMorePost(posts, data.data.after))
            : dispatch(postsActions.setPosts(posts, data.data.after))
    } catch (err) {
        dispatch(postsActions.setError(apiErrors(err)))
    } finally {
        dispatch(postsActions.setIsLoading(false))
    }
}

export const ratePost = (
    accessToken: string,
    postId: string,
    userRate: UserRate
): ThunkType => async (dispatch) => {
    try {
        await redditPostsAPI.ratePost(accessToken,postId,userRateToRateLevel(userRate))
    }
    catch (error){
        dispatch(postsActions.setError(apiErrors(error)))
    }
    finally {

    }

}
function userRateToRateLevel(userRate:UserRate):Dir{
    if(userRate==='like')return 1
    else if(userRate==='dislike')return -1
    else return 0
}

type ThunkType = BaseThunkType<PostsActions>
type UserRate = PostData['userActivity']['userRate']
type Dir = ApiRequest['ratePostParams']['dir']