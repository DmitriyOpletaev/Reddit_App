import {Button, Col, Row} from "antd";
import React from "react";
import m from './ContentPage.module.scss'
import {Sidebar} from "../sidebar/Sidebar";
import { Posts } from "./posts/Posts";
import Search from "antd/es/input/Search";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/reducers/auth_reducer";
import {getPosts} from "../../redux/reducers/posts_reducer";

export const ContentPage=()=>{

    return(
        <Row  wrap={false}>
            <Col flex={'auto'} className={m.posts_line_wrapper}>
                <div>
                    <GetPostsButton/>
                </div>
                <div>
                    <Posts/>
                </div>
            </Col>
            <Col flex="350px" className={m.sidebar_wrapper} >
                <Sidebar/>
            </Col>
        </Row>
    )
}

const GetPostsButton=()=>{
    const dispatch =useDispatch()
    const userTokens = useSelector(authSelector.userAuthTokens)
    function onSearch(value:string){
        userTokens && dispatch(getPosts(userTokens.access_token,'top',null,{sr_detail:'expand subreddits'}))
    }
    return(
        <div>
            <Search onSearch={onSearch}/>
        </div>
    )
}