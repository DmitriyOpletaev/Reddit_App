import {instanceReddit} from "./index-api"
import {RedditApiChildrenLink, RedditAPIListingResponse} from "../types/api_types/listing/listing_types"
import {
    GetCommunityPostsParamsType,
    GetUserPostsParamsType,
    CommunityPostsSort,
    UserPostsSort, ApiRequest
} from "../types/api_types/request-types";


export const redditPostsAPI = {
    getCommunityPosts: (
        accessToken: string,
        sort: CommunityPostsSort,
        subredditName: string | null,
        nextPageToken?: string
    ) => {
        const params: GetCommunityPostsParamsType = {
            sr_detail: 'expand subreddits',
            raw_json: 1,
            limit: 30,
            after: nextPageToken,
        }
        return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenLink>>(
            `${subredditName ? `r/${subredditName}/` : ''}${sort}`,
            {params}
        ).then(res => res.data)
    },
    getUserPosts: (
        accessToken: string,
        userName: string,
        sort: UserPostsSort,
        nextPageToken?: string
    ) => {
        const params: GetUserPostsParamsType = {
            sr_detail: 'expand subreddits',
            raw_json: 1,
            limit: 20,
            type: 'links',
            sort: sort,
            after: nextPageToken,
            t: 'all',
        }
        return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenLink>>(
            `user/${userName}/submitted`,
            {params}
        ).then(res => res.data)
    },
    ratePost: (
        accessToken: string,
        postId: string,
        rateLevel: ApiRequest['ratePostParams']['dir']
    ) => {
        const params: ApiRequest['ratePostParams'] = {
            id: postId,
            dir: rateLevel
        }
        return instanceReddit(accessToken).post(
            'api/vote', null, {params}).then(res => res)
    }

}

