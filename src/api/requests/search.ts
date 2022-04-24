import {instanceReddit} from "../Reddit_API";
import {
    RedditApiChildrenLink,
    RedditApiChildrenSubreddit,
    RedditApiChildrenUser,
    RedditAPIListingResponse
} from "../../types/api_types/listing-types/listing_types"

export const RedditSearchAPI = {
    searchAll: (accessToken: string, searchQuery: string,) => {
        const params = {
            q: searchQuery,
            type:'sr,link,user',
            show: 'all',
            after: null,
            before: null,
            count: 0,
            limit: 100,
            //include_facets: true,
            //restrict_sr: false,
            //sr_detail:true,
            //t: 'all'
        }
            return instanceReddit(accessToken).get<SearchAll|SearchAll[]>(
                `search`, {params}
            ).then(res => res.data)
    },

    searchCommunitiesOrUsers:(accessToken:string,searchType:SearchType,params:SearchParams)=>{
       switch (searchType) {
           case 'user':
                return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenUser>>(
               'users/search',{params}
           ).then(res=>res.data)
           case "community":
               return instanceReddit(accessToken).get<RedditAPIListingResponse<RedditApiChildrenSubreddit>>(
                   'subreddits/search',{params}
               ).then(res=>res.data)
       }
    }
}





type SearchType = 'community'|'user'
type SearchParams={
    q:string//search query
    sort?:'relevance'|'activity'
    after?:string,
    before?:string
    show?:'all'
    count?:number  //positive integer (default: 0)
    limit?:number //the maximum number of items desired (default: 25, maximum: 100)
    typeahead_active?:boolean


}
export type SearchAll = RedditAPIListingResponse<RedditApiChildrenSubreddit|RedditApiChildrenUser|RedditApiChildrenLink>
