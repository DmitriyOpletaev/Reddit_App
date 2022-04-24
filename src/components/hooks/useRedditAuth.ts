import {useDispatch, useSelector} from "react-redux"
import {credentialsReddit} from "../../api/Reddit_API"
import {useNavigate, useSearchParams} from "react-router-dom"
import {
    getAuthAccessToken, getNoneAuthAccessToken,
    logoutThunk,
    refreshAuthAccessToken
} from "../../redux/reducers/auth_reducer"
import {authSelector} from "../../redux/selectors/auth_selectors"
import {appLocalStorage} from "../../helpers/localStorage"


export const useRedditAuth = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const isUserAuthorise = useSelector(authSelector.isUserAuthorise)
    const accessToken = useSelector(authSelector.accessToken)
    const refreshToken = useSelector(authSelector.refreshToken)
    const isLoadingAuthentication = useSelector(authSelector.isLoadingAuthentication)
    const {clientId, redirectUri} = credentialsReddit
    const authHref=`https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=qwerty&redirect_uri=${redirectUri}&duration=permanent&scope=*`

    function login() {

        window.location.href = authHref

    }
    function applicationAuthOnLoad() {
        const authCode = searchParams.get('code')
        const localRefreshToken = appLocalStorage.getItem('refreshToken')
        if (localRefreshToken) {
            dispatch(refreshAuthAccessToken(localRefreshToken))
        } else if (authCode) {
            dispatch(getAuthAccessToken(authCode))
            navigate('/')
        }else{
            dispatch(getNoneAuthAccessToken())
        }
    }
    function logout() {
        dispatch(logoutThunk(accessToken, refreshToken))
    }

    return {login, logout,applicationAuthOnLoad, isLoadingAuthentication, isUserAuthorise, accessToken,authHref}
}