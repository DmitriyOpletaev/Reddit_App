import {instanceReddit} from "./index-api"
import {RedditApiChildrenLink, RedditAPIListingResponse} from "../types/api_types/listing/listing_types"
import {GetPostsParamsType, PostsSortType} from "../types/api_types/request-types";


export const RedditPostsAPI = {
    getCommunityPosts: (accessToken: string,
                        sort: PostsSortType,
                        subredditName: string | null,
                        nextPageToken?:string
    ) => {
        const params:GetPostsParamsType ={
            sr_detail: 'expand subreddits',
            raw_json:1,
            limit:30,
            after:nextPageToken
        }
        return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenLink>>(
            `${subredditName ? `r/${subredditName}/` : ''}${sort}`,
            {params}
        ).then(res => res.data)
    },



}



