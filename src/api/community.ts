import {instanceReddit} from "./index-api";
import {SearchCommunitiesAPIResponse} from "../types/api_types/search-types";
import {SearchCommunityParams} from "../types/api_types/request-types";
import {log} from "util";


export const redditCommunityAPI = {
    searchCommunity: (accessToken: string,
                      searchTerm: string,
                      over18 = true) => {
        const params:SearchCommunityParams = {
            include_over_18: over18,
            include_profiles: false,
            query:searchTerm,
        }
        return instanceReddit(accessToken).get<SearchCommunitiesAPIResponse>(
            'api/subreddit_autocomplete',
            {params}
        ).then(res => res.data)
    }
}




 /*   .catch((error) => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }

    })*/