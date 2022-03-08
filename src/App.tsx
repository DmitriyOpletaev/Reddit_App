import React from 'react'
import {HeaderComponent} from "./components/header/Header";
import {Content} from "antd/es/layout/layout";
import {ContentPage} from "./components/content_page/ContentPage";
import {Layout} from "antd";
import m from './App.module.scss'


function App() {
    return (
        <Layout  className={m.app_layout}>
            <div className={m.app_header}>
                <HeaderComponent/>
            </div>

            <Content className={m.app_content}>
                <ContentPage/>
            </Content>
        </Layout>
    )
}

export default App;
