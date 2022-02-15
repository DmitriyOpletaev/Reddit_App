import {Root} from "../types_API/listing_types";
import {instanceReddit} from "../Reddit_API";


export type PostsKey = 'best'|'new'|'rising'|'hot'|'top'

export const RedditPostsAPI={
    getPosts:(postsKey:PostsKey,accessToken:string)=>{
        return instanceReddit(accessToken).get<Root>(`${postsKey}`).then(
            res=>res.data
        )
    },
}
