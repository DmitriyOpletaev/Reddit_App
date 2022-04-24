import m from './Header.module.scss'
import {LoginButton} from "../common/login_button/Login_Button"
import {SearchBar} from "./searchBar/SearchBar"
import{RedditOutlined} from '@ant-design/icons'
import React, { useState} from "react"
import {useRedditAuth} from "../hooks/useRedditAuth";

export const HeaderComponent = () => {

    return (
        <>
            <div>
                <RedditOutlined style={{fontSize:'25px'}}/>
            </div>
            <SearchBar/>
            <LoginButton/>
        </>
    )
}

