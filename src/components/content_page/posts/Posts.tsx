import {Avatar, Image, List} from 'antd'
import m from './Posts.module.scss'
import {useSelector} from "react-redux";
import {postsSelector, PostsType} from "../../../redux/reducers/posts_reducer";
import Paragraph from "antd/es/typography/Paragraph";

export const Posts = () => {
    const posts = useSelector(postsSelector.posts)
    const isLoadingPosts = useSelector(postsSelector.isLoadingPosts)
    return (
        <div className={m.posts_wrapper}>
            <List
                className={m.list}
                loading={isLoadingPosts}
                dataSource={posts}
                renderItem={(postElement) => <PostElement {...postElement} />}
            />
        </div>
    )
}


const PostElement = (post: PostsType) => {
    const {
        title,
        author,
        selfText,
        thumbnail,
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
            key={postId}
            className={m.list_item}
        >
            <List.Item.Meta
                avatar={
                    <div>
                        <Avatar src={community.communityIcon}/>
                        <div>{community.communityName}</div>
                    </div>}
                title={<span>{title}</span>}
            />
            {descriptionExammple}
        </List.Item>
    )
}


const descriptionExammple = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut error excepturi inventore iusto magni nam necessitatibus nisi odio provident! Eligendi incidunt minus modi, natus reiciendis temporibus ullam! Consequatur, porro.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut error excepturi inventore iusto magni nam necessitatibus nisi odio provident! Eligendi incidunt minus modi, natus reiciendis temporibus ullam! Consequatur, porro.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut error excepturi inventore iusto magni nam necessitatibus nisi odio provident! Eligendi incidunt minus modi, natus reiciendis temporibus ullam! Consequatur, porro.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut error excepturi inventore iusto magni nam necessitatibus nisi odio provident! Eligendi incidunt minus modi, natus reiciendis temporibus ullam! Consequatur, porro.'
const videoExample = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'








