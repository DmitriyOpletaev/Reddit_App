import {Avatar, Button, Image, List, Space} from 'antd'
import m from './Posts.module.scss'
import {useSelector} from "react-redux";
import {postsSelector} from "../../../redux/selectors/post_selector";
import {Post} from "../../../types/reducers_types/PostsReducer_types";
import {FC} from "react";
import {TitlePost} from "./title/Title";
import {DescriptionPost} from "./description/DescriptionPost";
import {CommunityAvatar} from "./community_avatar/CommunityAvatar";
import {PostImages} from "./images/PostImages";

const listGridParameters = {
    gutter: 15,
    column: 1
}

export const Posts = () => {
    const posts = useSelector(postsSelector.posts)
    const isLoadingPosts = useSelector(postsSelector.isLoadingPosts)
    return (
        <List
            className={m.list}
            grid={listGridParameters}
            loading={isLoadingPosts}
            dataSource={posts}
            renderItem={(postElement) => <PostElement key={postElement.postId} {...postElement} />}
        />
    )
}


const PostElement: FC<Post> = (post) => {
    const {
        title,
        author,
        selfText,
        imgUrls,
        video,
        postId,
        community,
        commentsCount,
        createdTime,
        postFullName,
        over18
    } = post
    return (
        <List.Item
            className={m.list_item}
        >
            <List.Item.Meta
                className={m.list__item__meta}
                title={<TitlePost title={title}/>}
                avatar={<CommunityAvatar communityDetails={community}/>}
                description={selfText && <DescriptionPost description={selfText}/>}
            />
            <div>
                {selfText}{selfText}{selfText}
                {imgUrls && <PostImages imgUrls={imgUrls}/>}
            </div>
            <Button>
                asadssdaasdasd
            </Button>

        </List.Item>
    )
}













