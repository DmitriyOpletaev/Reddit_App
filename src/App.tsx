import React, {useEffect} from 'react'
import {HeaderComponent} from "./components/header/Header";
import {Content} from "antd/es/layout/layout";
import {ContentPage} from "./components/content_page/ContentPage";
import {Col, Layout, Row} from "antd";
import m from './App.module.scss'
import g from './components/content_page/ContentPage.module.scss'
import {Route, Routes} from 'react-router-dom';
import {useRedditAuth} from "./components/hooks/useRedditAuth";
import {Posts} from "./components/content_page/posts/Posts";


function App() {
    const {applicationAuthOnLoad}=useRedditAuth()
    useEffect(()=>{
        applicationAuthOnLoad()
    },[])
    return (
        <Layout  className={m.app_layout}>
            <div className={m.app_header}>
                <HeaderComponent/>
            </div>

            <Content className={m.app_content}>
                <Routes>
                    <Route path={'/'} element={<ContentPage/>}/>
                    <Route path={'/r/:id/:sort'} element={<ContentPage/>}/>
                </Routes>
            </Content>
        </Layout>
    )
}

export default App;
