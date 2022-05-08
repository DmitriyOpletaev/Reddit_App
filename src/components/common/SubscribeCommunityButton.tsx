import {CSSProperties, FC} from "react"
import {Button} from "antd"
import {PostData} from "../../types/redux_types/posts-types"
import {useDispatch, useSelector} from "react-redux"
import {authSelector} from "../../redux/selectors/auth-selector"
import {subscribeCommunity} from "../../redux/reducers/community-reducer"
import {SizeType} from "antd/lib/config-provider/SizeContext"
import {LoginPopover} from "./LoginPopover"
import './CommonElements.scss'
import{PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'


export const SubscribeCommunityButton: FC<SubscribeCommunityButtonProps> = (
    {isLoadingSubscribing, userIsSubscribed, communityId, buttonColor, size}
) => {
    const dispatch = useDispatch()
    const accessToken = useSelector(authSelector.accessToken)
    const isUserAuthorise = useSelector(authSelector.isUserAuthorise)

    function subscribe() {
        if (isUserAuthorise) {
            const subsAction = userIsSubscribed ? 'unsub' : 'sub'
            dispatch(subscribeCommunity(accessToken, communityId, subsAction))
        }
    }

    const styleButton: CSSProperties | undefined = buttonColor ? {
        backgroundColor: !userIsSubscribed ? buttonColor : undefined,
        borderColor: buttonColor || undefined,
        color: userIsSubscribed ? buttonColor : undefined,
    } : undefined

    const buttonClassName = userIsSubscribed ? 'unsubscribe-community-button' : 'subscribe-community-button'

    return (
        <LoginPopover placement={'bottom'}>
            <Button
                className={!buttonColor ? buttonClassName : undefined}
                style={styleButton}
                onClick={subscribe}
                loading={isLoadingSubscribing}
                danger={userIsSubscribed}
                size={size}
                icon={userIsSubscribed ? <MinusCircleOutlined /> :<PlusCircleOutlined /> }
                type={userIsSubscribed ? 'default' : 'primary'}
            >
                {userIsSubscribed ? 'Відписатися' : 'Підписатися'}
            </Button>
        </LoginPopover>

    )
}


type SubscribeCommunityButtonProps = {
    communityId: PostData['community']['communityId']
    userIsSubscribed: PostData['community']['authUserInfo']['userIsSubscribed']
    isLoadingSubscribing: PostData['community']['authUserInfo']['isLoadingSubscribing']
    buttonColor?: CSSProperties['color'] | null
    size?: SizeType
}