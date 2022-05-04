export type SearchCommunitiesAPIResponse ={
    subreddits:SearchCommunitiesAPIResponse_Subreddit[]|[]
}
export type SearchCommunitiesAPIResponse_Subreddit = {
    numSubscribers:   number
    name:             string
    allowedPostTypes: AllowedPostTypes
    id:               string
    primaryColor:     string
    communityIcon:    string
    icon:             string
}
type AllowedPostTypes = {
    images:   boolean
    text:     boolean
    videos:   boolean
    links:    boolean
    spoilers: boolean
}