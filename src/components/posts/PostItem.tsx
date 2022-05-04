import {FC} from "react"
import  "./Posts.scss";
import {Avatar, Col, Row, Space} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {Post} from "../../types/redux_types/posts-types";

export const PostItem: FC<PostItemProps> = ({post}) => {

    const {postId,postFullName,community,commentsCount,title,createdTime,selfText,imgUrls,over18,video,author} = post

    return (
        <Col className={'post'} span={24}>
            <Row justify={'space-between'}>
                <Space>
                    <Col>
                        <Avatar size={'default'} src={community.communityIcon}/>
                    </Col>
                    <Col>
                        <Row>
                            {community.communityName}
                        </Row>
                        <Row>
                            {author.authorName}
                        </Row>
                    </Col>
                </Space>
                <Col>
                    <EllipsisOutlined />
                </Col>
            </Row>
            <Row>
                <Title level={5}>{title}</Title>
            </Row>
            <Row>
                <Paragraph>{selfText}</Paragraph>
            </Row>
            <Row justify={'center'}>
            </Row>
            <Row justify={'center'}>
            </Row>
        </Col>
    )

}

type PostItemProps = {
    post:Post
}