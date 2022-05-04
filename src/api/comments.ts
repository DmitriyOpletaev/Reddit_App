import {instanceReddit} from "./index-api";

export const redditCommentsAPI={
    commentList:(accessToken:string)=>{

        return instanceReddit(accessToken).get(
            ``
        )
    }
}