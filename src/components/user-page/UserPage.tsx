import React, {FC, useEffect} from "react"
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CommunityPostsSort, UserPostsSort} from "../../types/api_types/request-types";
import m from "../../App.module.scss";
import {Col, Row} from "antd";
import {ProfileSidebar} from "../profile-sidebar/ProfileSidebar";
import {authSelector} from "../../redux/selectors/auth-selector";
import {getPosts, getUserPosts} from "../../redux/reducers/posts-thunk";

export const UserPage: FC<UserPageProps> = () => {

    const {userName} = useParams<'userName'>()
    const accessToken = useSelector(authSelector.accessToken)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const sort = searchParams.get('sort')


    useEffect(()=>{
        if(userName && accessToken){
            if(Object.values(UserPostsSort).includes(sort as UserPostsSort)){
                dispatch(getUserPosts(accessToken,userName,sort as UserPostsSort))
            }else {
                dispatch(getUserPosts(accessToken,userName,UserPostsSort.New))
            }
        }
    },[searchParams,userName])

    return (
        <div className={m.contentLayout}>
            <Row
                gutter={[0, 20]}
                justify={'space-around'}
            >
                <Col className={m.postsLayout} style={{width:'50%'}}>

                </Col>
            </Row>
        </div>
    )

}

type UserPageProps = {}