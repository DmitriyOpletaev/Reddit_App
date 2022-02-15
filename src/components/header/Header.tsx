import m from './Header.module.scss'
import {LoginButton} from "../common/login_button/Login_Button"

export const HeaderComponent = () => {

    return (
        <div className={m.header}>
            <LoginButton/>
        </div>
    )
}


