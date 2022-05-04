import {BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {RedditPostsAPI} from "../../api/posts"
import {createPosts} from "../../helpers/createPost"
import {Post} from "../../types/redux_types/posts-types"
import {PostsSortType} from "../../types/api_types/request-types"
import {apiErrors} from "../../helpers/api-errors";

type Actions = InferActionsTypes<typeof actionsPosts>
type ThunkType = BaseThunkType<Actions>
type InitialStateType = typeof initialState


let initialState = {
    isLoadingPosts: false,
    sort: 'new' as PostsSortType ,
    posts: [] as Post[],
    error: null as string | null,
    nextPageToken: null as string | null
}


const postsReducer = (state = initialState, action: Actions): InitialStateType => {
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
        default:
            return state
    }
}


export const actionsPosts = {
    setIsLoading: (isLoadingPosts: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING_POSTS', payload: isLoadingPosts
    } as const),
    setPosts: (posts: Array<Post>, nextPageToken: string | null) => ({
        type: 'REDDIT/SET_POSTS', payload: {posts, nextPageToken}
    } as const),
    setMorePost: (posts: Array<Post>, nextPageToken: string | null) => ({
        type: 'REDDIT/SET_MORE_POSTS', payload: {posts, nextPageToken}
    } as const),
    setError: (error: string) => ({
        type: 'REDDIT/SET_ERROR_LOADING_POSTS', payload: error
    } as const),
}


export const getPosts = (accessToken: string,
                         sort: PostsSortType,
                         subredditName: string | null = null,
                         nextPageToken?: string
): ThunkType => async (dispatch) => {
    try {
        dispatch(actionsPosts.setIsLoading(true))
        const data = await RedditPostsAPI.getCommunityPosts(accessToken, sort, subredditName, nextPageToken)
        const posts = createPosts(data)
        nextPageToken
            ? dispatch(actionsPosts.setMorePost(posts, data.data.after))
            : dispatch(actionsPosts.setPosts(posts, data.data.after))
    } catch (err) {
        dispatch(actionsPosts.setError(apiErrors(err)))
    } finally {
        dispatch(actionsPosts.setIsLoading(false))
    }
}


export default postsReducer


const posts: Array<Post> = [
    {
        postId: "u13tfk",
        postFullName: "t3_u13tfk",
        createdTime: 1649669828,
        commentsCount: 30,
        over18: false,
        title: "Consecutive seasons in the English top flight",
        selfText: "For context, I'm a year two cs student with 0 work experience in the field, and even though I've made a bunch of projects so far, including using react, this still feels off.\n" +
            "\n" +
            "Someone just emailed me saying they are interested to put me into a SENIOR React Dev position based on my github profile (which as I said above, contains these projects and mentions the fact that I'm a year two student).\n" +
            "\n" +
            "It seems that even if I do get that sort of job I won't be able to handle it and would get fired soon.\n" +
            "\n" +
            "Is this 100% a scam or should I bother trying to contact them for further information and try to find where their email links lead?\n" +
            "\n" +
            "I'm just...baffled right now.",
        imgUrls: ["https://i.redd.it/47dchtimdvs81.png"],
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        author: {
            authorName: "RevertBackwards",
            authorId: "t2_5tsojru7",
            authorFlairText: ":Feyenoord_Rotterdam:",
            authorFlairTextColor: "dark",
        },
        community: {
            communityName: "soccer",
            communityIcon: "https://b.thumbs.redditmedia.com/NojkQWzGBAau2dP3q0NTY5uJisbRx_q3ithIT5iLypE.png",
            communityId: "t5_2qi58",
            acceptFollowers: true,
            publicDescription: "The football subreddit. News, results and discussion about the beautiful game.",
            isOver18: false,
            keyColor: "",
            primaryColor: "#1d4169",
            subscribersCount: 3384479,
            userIsBanned: false,
            userIsSubscribed: false
        },
    },

]























