import {SearchAll} from "../api/search";
import {KindListing} from "../types/api_types/listing/listing_types";
// import {Community} from "../redux/reducers/search-reducer";


/*
export function createSearchResultsWithArrays(data:Array<SearchAll>|SearchAll):{communitiesArray:Community[]|null,accountsArray:Account[]|null,linksArray:Link[]|null}{
    if(Array.isArray(data)){
        let communitiesArray = [] as Array<Community>
        let  accountsArray = [] as Array<Account>
        let  linksArray = [] as Array<Link>
        data.map(e=>{
            const arrays = createSearchResults(e)
            if(arrays.communitiesArray){
                communitiesArray = communitiesArray.concat(arrays.communitiesArray)
            }
            if(arrays.accountsArray){
                accountsArray = accountsArray.concat(arrays.accountsArray)
            }
            if(arrays.linksArray){
                linksArray = linksArray.concat(arrays.linksArray)
            }
        })
        return {
            communitiesArray:communitiesArray.length>0 ? communitiesArray : null,
            accountsArray:accountsArray.length>0 ? accountsArray : null,
            linksArray:linksArray.length>0 ? linksArray : null,
        }
    }else {
        return  createSearchResults(data)}
}
function createSearchResults(data: SearchAll):{communitiesArray:Community[]|null,accountsArray:Account[]|null,linksArray:Link[]|null} {
    const communitiesArray = [] as Array<Community>
    const accountsArray = [] as Array<Account>
    const linksArray = [] as Array<Link>
    data.data.children.map(e => {
            if (e.kind === KindListing.Link) {
                linksArray.push({
                    authorName: e.data.author,
                    linkTitle: e.data.title,
                    linkId: e.data.id
                })
            } else if (e.kind === KindListing.Account) {
                accountsArray.push({
                    accountId: e.data.id || null,
                    accountName: e.data.name,
                    accountAvatar:e.data.snoovatar_img||null
                })
            } else {
                communitiesArray.push({
                    communityName: e.data.display_name,
                    communityAvatar: e.data.icon_img,
                    subscribersCount: e.data.subscribers,
                    communityId: e.data.id,
                    keyColor: e.data.key_color,
                    isUserSubscriber:e.data.user_is_subscriber,
                    redditFullName:e.data.name
                })
            }
        }
    )
    return {
        communitiesArray:communitiesArray.length>0 ? communitiesArray : null,
        accountsArray:accountsArray.length>0 ? accountsArray : null,
        linksArray:linksArray.length>0 ? linksArray : null,
    }
}*/
