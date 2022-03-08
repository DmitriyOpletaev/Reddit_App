import {instanceReddit} from "../Reddit_API"
import {RedditApiChildrenLink, RedditAPIListingResponse} from "../../types/api_types/listing_types";


export type SortType = 'best' | 'new' | 'rising' | 'hot' | 'top'

export const RedditPostsAPI = {

    getPosts: (accessToken: string, sort: SortType, subredditName: string | null, params: GetPostsParamsType) => {
        return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenLink>>(
            `${subredditName ? `r/${subredditName}/`:''}${sort}`, {params}
        ).then(res => res.data)
    },



}

export type GetPostsParamsType = {
    after?: string
    before?: string
    count?: number
    limit?: number
    show?: 'all'
    sr_detail?: 'expand subreddits',
}