export interface PostData {
    postId: string
    isPostHidden:boolean|null
    author: PostAuthorDetails
    community: PostCommunityDetails
    createdTime: number
    isOver18Post: boolean
    title: string,
    selfText: string,
    imgUrls: string[] | null,
    video: string | null
    rating:Rating
}
interface Rating{
    userRate:'like'|'dislike'|'none'
    likes:number
    dislikes:number
    commentsCount:number
    isLockedToNewComments:boolean
}
interface PostCommunityDetails {
    acceptFollowers: boolean
    authUserInfo: {
        userIsBanned: boolean
        userIsSubscribed: boolean
        isLoadingSubscribing:boolean
    }
    communityColor: string | null   //primaryColor - цвет сабреддита
    communityBanner: string | null
    communityHeaderImg:string|null
    communityIcon: string | null
    communityId: string
    communityName: string
    communityMiniDescription: string
    communityType: string
    isOver18Community: boolean
    subscribersCount: number
}

interface PostAuthorDetails {
    authorId: string | null
    authorName: string
    authorColor: string | null
    authorFlairText:string|null
    authorPremium:boolean
}





