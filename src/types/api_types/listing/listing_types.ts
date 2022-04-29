import {RedditAPILink} from "./links";
import {RedditAPIAccount} from "./account";
import {RedditAPISubreddit} from "./subreddit";

export interface RedditAPIListingResponse<T extends RedditApiChildrenSubreddit|RedditApiChildrenLink|RedditApiChildrenUser>{
    kind: 'Listing'
    data: Data<T>
}


interface Data<T extends RedditApiChildrenSubreddit|RedditApiChildrenLink|RedditApiChildrenUser> {
    after: string | null
    before: string | null
    modhash: string | null
    children: Array<T>
}
export type RedditApiChildrenSubreddit={
    kind:KindListing.Subreddit
    data: RedditAPISubreddit
}
export type RedditApiChildrenLink={
    kind:KindListing.Link
    data: RedditAPILink
}
export type RedditApiChildrenUser={
    kind:KindListing.Account
    data: RedditAPIAccount
}


export enum KindListing {
    Comment = 't1',
    Account = 't2',
    Link = 't3',
    Message = 't4',
    Subreddit = 't5',
    Award = 't6',
}

