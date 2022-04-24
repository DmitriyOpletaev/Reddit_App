import m from './SubscribeCommunityButton.module.scss'
import {FC} from "react";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {subscribeOrUnsubscribeCommunity} from "../../../redux/reducers/community_reducer";
import {authSelector} from "../../../redux/selectors/auth_selectors";

export const SubscribeCommunityButton: FC<SubscribeCommunityButtonProps> = ({userIsSubscribed, communityName}) => {
    const accessToken = useSelector(authSelector.accessToken)

    if (!accessToken) {
        return (
            <Button>
                Войдите чтобы подписаться
            </Button>
        )
    } else if (userIsSubscribed) {
        return <SubscribeButton accessToken={accessToken} communityName={communityName}/>
    } else return <UnsubscribeButton accessToken={accessToken} communityName={communityName}/>


}

const SubscribeButton: FC<ButtonProps> = ({accessToken, communityName}) => {
    const dispatch = useDispatch()

    function subscribeCommunity() {
        accessToken && dispatch(subscribeOrUnsubscribeCommunity(accessToken, 'sub', communityName))
    }

    return (
        <Button
            type={"primary"}
            onClick={subscribeCommunity}
        >
            Подписаться
        </Button>
    )
}
const UnsubscribeButton: FC<ButtonProps> = ({accessToken, communityName}) => {
    const dispatch = useDispatch()

    function unsubscribeCommunity() {
        dispatch(subscribeOrUnsubscribeCommunity(accessToken, 'unsub', communityName))
    }

    return (
        <Button
            type={"primary"}
            danger
            onClick={unsubscribeCommunity}
        >
            Отписаться
        </Button>
    )
}


type SubscribeCommunityButtonProps = {
    userIsSubscribed: boolean,
    communityName: string
}
type ButtonProps = {
    accessToken: string,
    communityName: string
}
