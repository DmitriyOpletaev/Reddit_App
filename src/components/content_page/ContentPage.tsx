import { Col, Row} from "antd"
import React, {useEffect} from "react"
import m from './ContentPage.module.scss'
import {Posts} from "./posts/Posts"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getPosts} from "../../redux/reducers/posts_reducer"
import {authSelector} from "../../redux/selectors/auth_selectors"

export const ContentPage = () => {
    const {id,sort}=useParams()
    const dispatch = useDispatch()
    const accessToken=useSelector(authSelector.accessToken)
    useEffect(()=>{
        if(sort === "best" || sort==="new" || sort=== "rising" ||  sort==="hot" ||  sort==="top"){
            accessToken&&dispatch(getPosts(accessToken,sort,id))
        }
        else{
            accessToken&&dispatch(getPosts(accessToken,'best',id))
        }

    },[accessToken,id,sort,dispatch])

    return (
        <Row
            wrap={false}
            justify={'center'}
            className={m.content_wrapper}
        >
            <Col flex={'100%'}>
                <Posts/>
            </Col>
        </Row>
    )
}