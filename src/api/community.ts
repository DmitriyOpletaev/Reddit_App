import {instanceReddit} from "./index-api";
import {SearchCommunitiesAPIResponse} from "../types/api_types/search-types"
import {ApiRequest} from "../types/api_types/request-types";


export const redditCommunityAPI = {
    searchCommunity: (accessToken: string,
                      searchTerm: string,
                      over18 = true) => {
        const params:ApiRequest['searchCommunityParams'] = {
            include_over_18: over18,
            include_profiles: false,
            query:searchTerm,
        }
        return instanceReddit(accessToken).get<SearchCommunitiesAPIResponse>(
            'api/subreddit_autocomplete', {params}
        ).then(res => res.data)
    },
    subscribeCommunity:(accessToken:string,
                        communityId:ApiRequest['subscribeCommunityParams']['sr'],
                        action:ApiRequest['subscribeCommunityParams']['action']
    )=>{
        const params:ApiRequest['subscribeCommunityParams']={
            sr:communityId,
            action:action
        }
        return instanceReddit(accessToken).post<{}>(
            'api/subscribe', null,{params}
        ).then(res=>res.data)
    }
}
