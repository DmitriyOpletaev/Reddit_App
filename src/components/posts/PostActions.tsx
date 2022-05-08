import {FC} from "react"
import {LikeButton} from "../common/LikeButton";
import {Row} from "antd";

export const PostActions: FC<PostActionsProps> = () => {

    return (
        <Row justify={'space-around'}>
            <LikeButton elementId={'postId'} userRate={'like'} likesCount={17985} dislikesCount={8000}/>


        </Row>
    )

}

type PostActionsProps = {
    postId:string
    userRate:"like" | "dislike" | "none"
    likesCount:number
    dislikesCount:number
}