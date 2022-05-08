import {FC} from "react"
import "./Posts.scss";
import {Avatar, Badge, Col, Row, Space} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {PostData} from "../../types/redux_types/posts-types";
import {ImageSlider} from "./ImageSlider";
import {CommunityPopover} from "./community-popover/CommunityPopover";
import {AvatarIconLink} from "../common/AvatarIconLink";
import {AuthorNameLink} from "../common/AuthorNameLink";
import {LikeButton} from "../common/LikeButton";
import {PostActions} from "./PostActions";

export const PostItem: FC<PostItemProps> = ({post}) => {

    const {
        postId,
        community,
        commentsCount,
        title,
        createdTime,
        selfText,
        imgUrls,
        over18,
        video,
        author,
        userActivity
    } = post
    const {communityColor, communityName, communityIcon} = community
    const {authorName, authorFlairTextColor} = author

    return (
        <div className={'post__wrapper'}>
            <Badge.Ribbon
                className={'badge-ribbon'}
                color={communityColor || '#b7bcce'}
                text={<EllipsisOutlined/>}
            >
                <div className={'post'}>
                    <Row justify={'space-between'}>
                        <Space>
                            <Col>
                                <CommunityPopover communityInfo={community} placement={'bottomRight'}>
                                    <AvatarIconLink type={'community'}
                                                    size={35}
                                                    url={communityIcon}
                                                    navLink={`community/${communityName}`}/>
                                </CommunityPopover>

                            </Col>
                            <Col>
                                <div>
                                    <CommunityPopover communityInfo={community} placement={'rightTop'}>
                                        <AuthorNameLink name={communityName} type={'community'}
                                                        color={communityColor}/>
                                    </CommunityPopover>

                                </div>
                                <div>
                                    <AuthorNameLink name={authorName} color={authorFlairTextColor} type={'user'}/>
                                </div>
                            </Col>
                        </Space>
                    </Row>
                    <Title level={5}>{title}</Title>
                    <Paragraph>{selfText}</Paragraph>
                    {imgUrls && <ImageSlider imgUrls={imgUrls}/>}
                    <PostActions/>
                </div>
            </Badge.Ribbon>
        </div>
    )
}

type PostItemProps = {
    post: PostData
}