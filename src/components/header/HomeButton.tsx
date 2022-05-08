import appLogoPng from '../../assets/image/AppLogo.png'
import {Avatar} from "antd"
import {FC} from "react"
import {AvatarSize} from "antd/es/avatar/SizeContext"
import {NavLink} from "react-router-dom"

export const HomeButton:FC<AppLogoProps>=({size})=>{

    return(
            <NavLink to={'/'}>
                <Avatar size={size} src={appLogoPng}/>
            </NavLink>
    )
}

type AppLogoProps={
    size?:AvatarSize
}