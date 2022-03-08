import m from './Header.module.scss'
import {LoginButton} from "../common/login_button/Login_Button"
import {SearchBar} from "./searchBar/SearchBar";
import{RedditOutlined} from '@ant-design/icons'
import {Avatar} from "antd";

export const HeaderComponent = () => {

    return (
        <>
            <div>
                <RedditOutlined/>
                <span>RedditClone</span>
                <Avatar src={'https://i.redd.it/snoovatar/avatars/c27f3735-860f-4a69-b0cf-85540b135e4d.png'}/>
            </div>
            <SearchBar/>
            <LoginButton/>
        </>
    )
}


