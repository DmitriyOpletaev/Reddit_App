import React, {FC, useContext, useEffect} from "react"
import m from "../../App.module.scss";
import {Col, Row} from "antd";
import {ProfileSidebar} from "../profile-sidebar/ProfileSidebar";
import {PostList} from "../posts/PostList";
import {ColProps} from "antd/lib/grid/col";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getPosts} from "../../redux/reducers/posts-reducer";
import {authSelector} from "../../redux/selectors/auth-selectors";
import {LoadMoreButton} from "../posts/LoadMoreButton";
import {postsSelector} from "../../redux/selectors/post-selector";

export const CommunityPage: FC<ContentPageProps> = () => {
    const accessToken = useSelector(authSelector.accessToken)
    const {communityName}=useParams()
    const dispatch = useDispatch()
    const nextPageToken=useSelector(postsSelector.nextPageToken)


    useEffect(()=>{
       communityName &&  accessToken && dispatch(getPosts(accessToken,'new', communityName ))
    },[communityName])

    function getMoreCommunityPosts(){
        communityName &&
        accessToken &&
        nextPageToken &&
        dispatch(getPosts(accessToken,'new',communityName,nextPageToken))
    }


    return (
        <div className={m.contentLayout}>
            <Row
                gutter={[0, 20]}
                justify={'space-around'}
            >
                <Col className={m.sidebarsLayout} {...sidebarsLayoutColSettings}>
                    <Row gutter={[10,15]} >
                        <Col {...sidebarColSettigs}>
                            <ProfileSidebar/>
                        </Col>
                        <Col {...sidebarColSettigs}>
                            <ProfileSidebar/>
                        </Col>
                        <Col {...sidebarColSettigs}>
                            <ProfileSidebar/>
                        </Col>
                    </Row>
                </Col>
                <Col className={m.postsLayout} {...contentColSettings}>
                    <PostList/>
                    <LoadMoreButton func={getMoreCommunityPosts}/>
                </Col>
            </Row>
        </div>
    )

}
const sidebarsLayoutColSettings: ColProps = {
    xs: {
        span: 24
    },
    sm: {
        span: 22
    },
    lg: {
        span: 7

    },
}
const sidebarColSettigs:ColProps={
    lg:{span:24}, xs:{span:8}
}
const contentColSettings: ColProps = {
    xs: {
        span: 24
    },
    sm: {
        span: 22
    },
    lg: {
        span: 16
    },
}
type ContentPageProps = {}