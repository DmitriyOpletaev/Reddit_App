import {FC} from "react"
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {postsSelector} from "../../redux/selectors/post-selector";
import {authSelector} from "../../redux/selectors/auth-selectors";
import {getPosts} from "../../redux/reducers/posts-reducer";

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({func}) => {

    const nextPageToken=useSelector(postsSelector.nextPageToken)
    const accessToken = useSelector(authSelector.accessToken)
    const dispatch = useDispatch()
    function loadMorePosts(){
    }
    return (
        <Button onClick={func}>
            Більше постів
        </Button>
    )

}

type LoadMoreButtonProps = {
    func:()=>void
}