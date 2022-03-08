export type PostsType = {
    postId:string
    postFullName:string
    media:{ url:string }|null
    author: {
        authorName: string,
        authorRedditsFullName:string,
    },
    createdTime:string
    commentsCount:number
    over18:boolean
    title: string,
    selftext: string,
    thumbnail?:string,
    video?:string


}