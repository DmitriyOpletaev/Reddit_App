import {Button} from "antd"
import {useRedditAuth} from "../../hooks/useRedditAuth";
import {LogoutOutlined, LoginOutlined} from '@ant-design/icons'
import {FC} from "react"
import {SizeType} from "antd/es/config-provider/SizeContext";

export const LoginButton: FC<LoginButtonProps> = ({mini,className,size}) => {
    const {login, logout, isUserAuthorise, isLoadingAuthentication} = useRedditAuth()
    if (isUserAuthorise) {
        return (
            <Button type={"default"}
                    danger
                    onClick={logout}
                    size={size}
                    loading={isLoadingAuthentication}
                    icon={<LogoutOutlined/>}
                    className={`logoutButton ${className}`}
            >
                <ButtonText mini={mini} title={'Вийти'}/>
            </Button>
        )
    } else {
        return (
            <Button type={"primary"}
                    onClick={login}
                    size={size}
                    loading={isLoadingAuthentication}
                    icon={<LoginOutlined/>}
                    className={`loginButton ${className}`}
            >
               <ButtonText mini={mini} title={'Увійти'}/>
            </Button>
        )
    }
}
const ButtonText:FC<ButtonTextProps>=({mini,title})=>{
    if(!mini)return <span className={'buttonText'}>{title}</span>
    else return <></>
}


interface Mini {
    mini?:boolean
}
interface ButtonTextProps extends Mini{
    title:string
}
interface LoginButtonProps extends Mini{
    className?:string
    size?:SizeType
}


