import {Button} from "antd"
import {useRedditAuth} from "../../hooks/useRedditAuth";
import {LogoutOutlined,LoginOutlined} from '@ant-design/icons'

export const LoginButton = () => {
    const {login, logout, isUserAuthorise, isLoadingAuthentication} = useRedditAuth()


    return (
        isUserAuthorise ?
            <Button type={"primary"}
                    danger
                    onClick={logout}
                    loading={isLoadingAuthentication}
                    icon={<LogoutOutlined />}
            >
                Logout
            </Button>
            :
            <Button type={"primary"}
                    onClick={login}
                    loading={isLoadingAuthentication}
                    icon={<LoginOutlined />}
            >
                Login
            </Button>
    )
}
