import {instanceReddit} from "../Reddit_API"
import {RedditApiChildrenLink, RedditAPIListingResponse} from "../../types/api_types/listing/listing_types";

const basedParams: GetPostsParamsType = {
    sr_detail: 'expand subreddits',
    raw_json:1,
    limit:15
}


export const RedditPostsAPI = {

    getPosts: (accessToken: string,
               sort: SortType,
               subredditName: string | null,
               params: GetPostsParamsType = basedParams) => {
        return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenLink>>(
            `${subredditName ? `r/${subredditName}/` : ''}${sort}`,
            {params}
        ).then(res => res.data)
    },



}


export type SortType = 'best' | 'new' | 'rising' | 'hot' | 'top'
export type GetPostsParamsType = {
    after?: string
    before?: string
    count?: number
    limit?: number //max-100
    show?: 'all'
    sr_detail?: 'expand subreddits',
    raw_json?:1
}
/*
https://preview.redd.it/hgb9ykadx5i51.png?width=717&format=png&auto=webp&s=911b12ae02a359165c1e0b701b5b129f9524215b
https://preview.redd.it/ke0vvuj012v81.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=b92a22f891598bae22dd62fd1db04aac54130314
*/