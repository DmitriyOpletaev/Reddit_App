import {instanceReddit} from "../Reddit_API";
import {SubscribesAction} from "../../types/reducers_types/communityReducer_types";
import {RedditApiChildrenSubreddit, RedditAPIListingResponse} from "../../types/api_types/listing-types/listing_types";


export const redditCommunityAPI = {
    userSubscribersCommunities: (accessToken: string) => {
        const params = {
            sr_detail: 'expand subreddits'
        }
        return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenSubreddit>>(
            `subreddits/mine/subscriber`,
            {params}
        ).then(res => res.data)
    },
    subscribeOrUnsubscribeCommunity: (
        accessToken: string,
        action: SubscribesAction,
        communityName: string,
    ) => {
        const params = {
            action,
            sr_name: communityName
        }
        return instanceReddit(accessToken).post(
            'api/subscribe',
            {},
            {params}
        ).then(res => res.status)
    }
}
