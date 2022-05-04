
export interface Post {
    postId:string
    postFullName:string
    author: PostAuthorDetails
    community:PostCommunityDetails
    createdTime:number
    commentsCount:number
    over18:boolean
    title: string,
    selfText: string,
    imgUrls:string[]|null,
    video:string|null
}

export interface PostCommunityDetails{
    communityId:string
    communityIcon:string|null
    communityName:string
    subscribersCount:number
    publicDescription:string
    keyColor:string
    userIsSubscribed:boolean
    userIsBanned:boolean
    isOver18:boolean
    acceptFollowers:boolean
    primaryColor:string
}
export interface PostAuthorDetails{
    authorId:string|null
    authorName: string
    authorFlairText:string|null
    authorFlairTextColor:string|null
}





