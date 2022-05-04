import {SearchCommunitiesAPIResponse_Subreddit} from "../types/api_types/search-types";
import {SearchCommunitiesResults} from "../types/redux_types/communities-types";

export function createSearchCommunitiesResult(searchCommunitiesAPIResponse_Subreddit: Array<SearchCommunitiesAPIResponse_Subreddit>) {

    const searchResult: Array<SearchCommunitiesResults> = searchCommunitiesAPIResponse_Subreddit.map(
        ({communityIcon, icon, id, name, numSubscribers, primaryColor}) => (
            {
                communityName: name,
                communityId: id,
                communityNumSubscribers: numSubscribers,
                communityPrimaryColor: primaryColor,
                communityIcon: chooseCommunityIcon(communityIcon, icon)
            }
        )
    )
    return searchResult
}

function chooseCommunityIcon(communityIcon: SearchCommunitiesAPIResponse_Subreddit['communityIcon'],
                             icon: SearchCommunitiesAPIResponse_Subreddit['icon']) {
    return communityIcon.length > 0 ? communityIcon : icon.length > 0 ? icon : null
}










































