import m from './Header.module.scss'
import React from "react"
import {Col, Row} from "antd";
import {AppMenu} from "./app-menu/AppMenu";
import {LoginButton} from "../common/login_button/Login_Button";
import {SearchBar} from "./searchBar/SearchBar";
import { SettingOutlined,RocketTwoTone} from '@ant-design/icons';
import {instanceReddit} from "../../api/Reddit_API";
import {useRedditAuth} from "../hooks/useRedditAuth";


export const AppHeader = () => {

    return (
        <div className={m.headerWrapper}>
            <Row justify={'space-between'} align={'middle'} className={m.appHeader}>
                <Col span={11}>
                    <AppMenu/>
                </Col>
                <Col span={2}>
                    <TestApiButton/>
                </Col>
                <Col span={11}>
                    <Row justify={'space-around'}>
                        <SearchBar/>
                        <SettingOutlined/>
                        <LoginButton/>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

const TestApiButton=()=>{
    const {accessToken}=useRedditAuth()
    const urls={
        scope:'api/v1/scopes',
        mineSubscriber:'subreddits/mine/subscriber',
        srPopular:'subreddits/popular',
        srNew:'subreddits/new',
        srDefault:'subreddits/default',
        srGold:'subreddits/gold',//dont work =(
        widgets:'r/worldnews/api/widgets'
    }
    async function testApi(){
        accessToken && await instanceReddit(accessToken).get(urls.widgets).then(res=>res.data)
    }
    return(
        <RocketTwoTone style={{fontSize:'1.8em'}} twoToneColor={'blue'} onClick={testApi}/>
    )
}
