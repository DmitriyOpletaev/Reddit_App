import React, {FC} from "react"
import'./Posts.scss'
import {Row} from "antd"
import {PostItem} from "./PostItem";
import {useSelector} from "react-redux";
import {postsSelector} from "../../redux/selectors/post-selector";
import {LoadMoreButton} from "./LoadMoreButton";

export const PostList: FC<PostsProps> = () => {
    const posts=useSelector(postsSelector.posts)
    const Posts = posts.map((post) => (<PostItem post={post}/>))
    return (
        <Row gutter={[0, 18]} className={'postsLayout'} justify={'center'}>
            {Posts}
        </Row>
    )

}

type PostsProps = {

}