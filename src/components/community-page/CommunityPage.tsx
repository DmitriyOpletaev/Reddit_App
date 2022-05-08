import React, {FC, useEffect} from "react"
import m from "../../App.module.scss"
import {Col, Row} from "antd"
import {ProfileSidebar} from "../profile-sidebar/ProfileSidebar"
import {ColProps} from "antd/lib/grid/col"
import {useDispatch, useSelector} from "react-redux"
import {useParams, useSearchParams} from "react-router-dom"
import {authSelector} from "../../redux/selectors/auth-selector"
import {CommunityPostsSort} from "../../types/api_types/request-types";
import {PostsSortButtons} from "../posts/PostsSortButtons";
import {LoadMoreButton} from "../posts/LoadMoreButton";
import {postsSelector} from "../../redux/selectors/post-selector";
import {PostItem} from "../posts/PostItem";
import {getPosts} from "../../redux/reducers/posts-thunk";

export const CommunityPage: FC<ContentPageProps> = () => {
    const accessToken = useSelector(authSelector.accessToken)
    const {communityName} = useParams()
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const sort = searchParams.get('sort')



    useEffect(() => {
        if (accessToken) {
            if (Object.values(CommunityPostsSort).includes(sort as CommunityPostsSort)) {
                dispatch(getPosts(accessToken, sort as CommunityPostsSort, communityName))
            } else {
                dispatch(getPosts(accessToken, CommunityPostsSort.New, communityName))
                setSearchParams(`sort=${CommunityPostsSort.New}`)
            }
        }
    }, [communityName])

    useEffect(()=>{

    },[sort])


    function sortPosts(sortValue: string) {
        dispatch(getPosts(accessToken, sortValue as CommunityPostsSort, communityName))
        setSearchParams(`sort=${sortValue}`)
    }


    const nextPageToken = useSelector(postsSelector.nextPageToken)
    function loadMorePosts(){
       nextPageToken && dispatch(getPosts(accessToken,sort as CommunityPostsSort,communityName,nextPageToken))
    }

    const posts = useSelector(postsSelector.posts)
    const Posts = posts.map((post) => (<PostItem post={post}/>))
    return (
        <div className={m.contentLayout}>
            <Row
                gutter={[0, 20]}
                justify={'space-around'}
            >

                <Col className={m.sidebarsLayout} {...sidebarsLayoutColSettings}>
                    <Row gutter={[10, 15]}>
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
                    <Row gutter={[0, 18]} className={'postsLayout'} justify={'center'}>
                        <PostsSortButtons sort={Object.values(CommunityPostsSort)} callback={sortPosts}/>
                        {Posts}
                        <LoadMoreButton func={loadMorePosts}/>
                    </Row>
                </Col>
            </Row>
        </div>
    )

}

const sidebarsLayoutColSettings: ColProps = {
    xs: {
        span: 23
    },
    sm: {
        span: 22
    },
    lg: {
        span: 7

    },
}
const sidebarColSettigs: ColProps = {
    lg: {span: 24}, xs: {span: 8}
}
const contentColSettings: ColProps = {
    xs: {
        span: 23,
    },
    sm: {
        span: 22,
    },
    lg: {
        span: 16
    },
}
type ContentPageProps = {}