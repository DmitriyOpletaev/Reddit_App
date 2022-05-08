import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/selectors/auth-selector";
import {useParams, useSearchParams} from "react-router-dom";
import {postsSelector} from "../../redux/selectors/post-selector";
import {CommunityPostsSort} from "../../types/api_types/request-types";
import {getPosts} from "../../redux/reducers/posts-thunk";

export function useCommunityPosts(){
    const dispatch = useDispatch()
    const accessToken = useSelector(authSelector.accessToken)
    const {communityName} = useParams()
    const nextPageToken = useSelector(postsSelector.nextPageToken)
    const [searchParams, setSearchParams] = useSearchParams()
    const sort = searchParams.get('sort')
    function loadMorePosts(){
        nextPageToken && dispatch(getPosts(accessToken,sort as CommunityPostsSort,communityName,nextPageToken))
    }




    return {}
}