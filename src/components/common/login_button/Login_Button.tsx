import {Button} from "antd"
import {useRedditAuth} from "../../hooks/useRedditAuth";

export const LoginButton = () => {
    const {login, logout, isUserAuthorise, isLoadingAuthentication} = useRedditAuth()


    return (
        isUserAuthorise ?
            <Button type={"primary"}
                    danger
                    onClick={logout}
                    loading={isLoadingAuthentication}>
                Logout
            </Button>
            :
            <Button type={"primary"}
                    onClick={login}
                    loading={isLoadingAuthentication}>
                Login
            </Button>
    )
}
