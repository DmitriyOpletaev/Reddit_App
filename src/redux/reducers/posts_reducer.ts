import {AppState, BaseThunkType, InferActionsTypes} from "../Redux_Store"
import {GetPostsParamsType, RedditPostsAPI, SortType} from "../../api/requests/posts"
import {createPosts} from "../../helpers/createPost";
import {Post, PostAuthorDetails, PostCommunityDetails} from "../../types/reducers_types/PostsReducer_types";
import {RedditAPILink} from "../../types/api_types/listing/links";
type Actions = InferActionsTypes<typeof actionsPosts>
type ThunkType = BaseThunkType<Actions>
type InitialStateType = typeof initialState





let initialState = {
    isLoadingPosts: false,
    /*posts: [] as Post[],*/
    posts: [
        {
        postId:"u13tfk",
        postFullName:"t3_u13tfk",
        createdTime:1649669828,
        commentsCount:30,
        over18:false,
        title:"Consecutive seasons in the English top flight",
        selfText: "For context, I'm a year two cs student with 0 work experience in the field, and even though I've made a bunch of projects so far, including using react, this still feels off.\n" +
            "\n" +
            "Someone just emailed me saying they are interested to put me into a SENIOR React Dev position based on my github profile (which as I said above, contains these projects and mentions the fact that I'm a year two student).\n" +
            "\n" +
            "It seems that even if I do get that sort of job I won't be able to handle it and would get fired soon.\n" +
            "\n" +
            "Is this 100% a scam or should I bother trying to contact them for further information and try to find where their email links lead?\n" +
            "\n" +
            "I'm just...baffled right now.",
        imgUrls:["https://i.redd.it/47dchtimdvs81.png"],
            video:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        author:{
            authorName:"RevertBackwards",
            authorId:"t2_5tsojru7",
            authorFlairText:":Feyenoord_Rotterdam:",
            authorFlairTextColor:"dark",
        },
        community:{
            communityName:"soccer",
            communityIcon:"https://b.thumbs.redditmedia.com/NojkQWzGBAau2dP3q0NTY5uJisbRx_q3ithIT5iLypE.png",
            communityId:"t5_2qi58",
            acceptFollowers:true,
            publicDescription:"The football subreddit. News, results and discussion about the beautiful game.",
            isOver18:false,
            keyColor:"",
            primaryColor:"#1d4169",
            subscribersCount:3384479,
            userIsBanned:false,
            userIsSubscribed:false
        },
    },

    ] as Array<Post>,
    postsAPIResultToTypescript:[] as Array<RedditAPILink>
}
export const jsonSelector=(state:AppState)=>state.postsReducer.postsAPIResultToTypescript


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
        case 'REDDIT/SET_JSONS'   :
            return {
                ...state,postsAPIResultToTypescript: state.postsAPIResultToTypescript.concat(action.payload)
            }
        default:
            return state
    }
}


export const actionsPosts = {
    setIsLoading: (isLoadingPosts: boolean) => ({
        type: 'REDDIT/SET_IS_LOADING_POSTS', payload: isLoadingPosts
    } as const),
    setPosts: (posts: Array<Post>) => ({
        type: 'REDDIT/SET_POSTS', payload: posts
    } as const),
    setPostsJSONS: (posts: Array<RedditAPILink>) => ({
        type: 'REDDIT/SET_JSONS', payload: posts
    } as const),

}


export const getPosts = (accessToken: string,
                         sort:SortType,
                         subredditName:string|null=null,
                         searchParams?:GetPostsParamsType): ThunkType => async (dispatch) => {
    try {
        dispatch(actionsPosts.setIsLoading(true))
        const data = await RedditPostsAPI.getPosts(accessToken,sort,subredditName,searchParams)
        const posts = createPosts(data)
        dispatch(actionsPosts.setPosts(posts))
/*
        dispatch(actionsPosts.setPostsJSONS(data.data.children.map(e=>e.data)))
*/
    } catch (err) {
        alert('error getPosts')
    } finally {
        dispatch(actionsPosts.setIsLoading(false))
    }
}



export default postsReducer




























