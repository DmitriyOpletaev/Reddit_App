import {FC} from "react"
import {Space} from "antd";
import {LikeOutlined, DislikeOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/selectors/auth-selector";
import {ratePost} from "../../redux/reducers/posts-thunk";

export const LikeButton: FC<LikeButtonProps> = ({elementId, userRate}) => {

    const accessToken = useSelector(authSelector.accessToken)
    const isUserAuthorise = useSelector(authSelector.isUserAuthorise)
    const dispatch = useDispatch()

    function onLikeClick() {
        if (isUserAuthorise) {
            if(userRate === 'like'){
                dispatch(ratePost(accessToken, elementId, 'none'))

            }else{
                dispatch(ratePost(accessToken, elementId, 'like'))
            }
        }
    }

    function onDislikeClick() {
        if (isUserAuthorise) {
            if(userRate === 'dislike'){
                dispatch(ratePost(accessToken, elementId, 'none'))

            }else{
                dispatch(ratePost(accessToken, elementId, 'dislike'))
            }
        }
    }

    return (
        <Space>
            <Space>
                <LikeOutlined onClick={onLikeClick} style={{color:userRate==='like' ?'red':undefined}}/>
                <span></span>
            </Space>
            <Space>
                <DislikeOutlined onClick={onDislikeClick} style={{color:userRate==='dislike' ?'red':undefined}}/>
            </Space>
        </Space>
    )

}

type LikeButtonProps = {
    elementId: string,
    userRate: "like" | "dislike" | "none"
    likesCount:number
    dislikesCount:number
}