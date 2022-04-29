import {FC} from "react"
import m from './Posts.module.scss'
import {Col, Row} from "antd";
import {useSelector} from "react-redux";
import {postsSelector} from "../../redux/selectors/post_selector";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export const Posts: FC<PostsProps> = () => {
    const posts=useSelector(postsSelector.posts)
    const posts2 = posts.concat(posts).concat(posts).concat(posts)
    const isLoadingPosts=useSelector(postsSelector.isLoadingPosts)

    const Posts=posts2.map((post)=>(
        <Col className={m.post} span={24}>
            <Row>
                <Title level={4}>{post.title}</Title>
            </Row>
            <Row>
                <Paragraph>{post.selfText}</Paragraph>
            </Row>
            <Row>
                {post.imgUrls&&post.imgUrls[0] && <img style={{margin:'15px auto'}} height={'400px'} src={post.imgUrls[0]}/>}
            </Row>
            <Row>
                {post.video && <video src={post.video} controls style={{margin: '15px auto'}} height={'250px'}/>}
            </Row>
        </Col>
    ))
    return (
        <Row  gutter={[0,18]} className={m.postsLayout}>
            {Posts}
        </Row>
    )

}

type PostsProps = {}