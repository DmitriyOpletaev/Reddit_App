import {useDispatch, useSelector} from "react-redux"
import {useNavigate, useSearchParams} from "react-router-dom"
import {useEffect} from "react"
import {Button} from "antd"
import {credentialsReddit} from "../../../api/Reddit_API";
import {authSelector, getAccessToken} from "../../../redux/reducers/Auth_Reducer";

export const LoginButton = () => {
    const {clientId, redirectUri} = credentialsReddit

    function redirect() {
        window.location.href =
            `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=qwerty&redirect_uri=${redirectUri}&duration=permanent&scope=*`
    }

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        const code = searchParams.get('code') as string | undefined
        const error = searchParams.get('error') as string | undefined
        if (code) {
            dispatch(getAccessToken(code, 'RETRIEVAL'))
            console.log(code)
            navigate('/')
        }
        if (error) {
            alert(error)
            navigate('/')
        }

    }, [])
    const userAuthTokens = useSelector(authSelector.userAuthTokens)
    const localRefreshingToken = localStorage.getItem('refreshToken')
    const isLoadingAuthentication = useSelector(authSelector.isLoadingAuthentication)
    useEffect(() => {
        if(!userAuthTokens && localRefreshingToken){
            dispatch(getAccessToken(localRefreshingToken,'REFRESHING'))
        }
    }, [])

    return (
        <div>
            {userAuthTokens ?
                <Button type={"primary"} loading={isLoadingAuthentication}>
                    Logout
                </Button>
                :
                <Button type={"primary"} onClick={redirect} loading={isLoadingAuthentication}>
                    Login
                </Button>
            }
        </div>
    )
}
