import React, {useEffect} from 'react'
import m from './App.module.scss'
import {AppHeader} from "./components/header/Header"
import {useRedditAuth} from "./components/hooks/useRedditAuth"
import { Col, Row} from "antd"
import {ProfileSidebar} from "./components/profile-sidebar/ProfileSidebar"
import {Posts} from "./components/posts/Posts"
import {ColProps} from "antd/lib/grid/col"


const App = () => {
    const {applicationAuthOnLoad} = useRedditAuth()
    useEffect(() => {
        applicationAuthOnLoad()
    }, [])

    return (
        <section className={m.appLayout}>
            <AppHeader/>
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
                        <Posts/>
                    </Col>
                </Row>
            </div>
        </section>

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


export default App
