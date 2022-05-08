import {CSSProperties, FC} from "react"
import {Avatar} from "antd";
import {AvatarSize} from "antd/es/avatar/SizeContext";
import {TeamOutlined, UserOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";




export const AvatarIconLink: FC<AvatarIconProps> = ({url, size, type, navLink}) => {
    const style: CSSProperties = {
        cursor: navLink ? 'pointer' : 'default'
    }
    const IconAvatar = <Avatar style={style} size={size} src={url} icon={type === 'user' ? <UserOutlined/> : <TeamOutlined/>}/>

    if (navLink) return (
        <NavLink to={navLink} end>
            {IconAvatar}
        </NavLink>
    )
    return <>{IconAvatar}</>
}

type AvatarIconProps = {
    type: 'user' | 'community'
    url?: string | null
    size?: AvatarSize
    navLink?: string
}