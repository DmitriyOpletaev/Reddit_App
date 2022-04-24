import {instanceReddit} from "../Reddit_API";

export const redditCommentsAPI={
    commentList:(accessToken:string)=>{

        return instanceReddit(accessToken).get(
            ``
        )
    }
}