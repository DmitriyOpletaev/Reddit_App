import m from './Listing.module.scss'
import {Button, Image} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../redux/reducers/Auth_Reducer";
import {getPosts, postsSelector} from "../../redux/reducers/Posts_Reducer";
export const Listing=()=>{

    return(
       <div className={m.listing}>
               <ListingSortedButtons/>
               <Posts/>
       </div>
    )
}

export const ListingSortedButtons=()=>{
    const dispatch = useDispatch()
    const tokens = useSelector(authSelector.userAuthTokens)
    return(
        <div className={m.listing__sortedButtons__wrapper}>
            <div className={m.listing__sortedButtons__container}>
                <Button onClick={()=>{
                    if(tokens){
                        dispatch(getPosts('top',tokens.access_token))
                    }
                }}>
                    Hot
                </Button>
                <Button>
                    Hot
                </Button>
                <Button >
                    Hot
                </Button>
                <Button >
                    Hot
                </Button>
            </div>

        </div>
    )
}

export const Posts = ()=>{
    const post = useSelector(postsSelector.posts)
    const PostsArray = post.map(p=>(
        <div className={m.post__container}>
            <h3>{p.title}</h3>
            <h4>{p.author.author}</h4>
            <div>{p.selftext}</div>
            {p.video&&<video   controls src={p.video}/>}
            {p.thumbnail&&<Image  src={p.thumbnail}/>}
        </div>
    ))
    return(
        <div className={m.posts}>
            {PostsArray}
            <div className={m.post__container}>
                Post #1
                <div>asdasdasdasdasdasdasdasdasd</div>
            </div>
              <div className={m.post__container}>
                Post #2
            </div>
              <div className={m.post__container}>
                Post #3
            </div>
              <div className={m.post__container}>
                Post #4
            </div>

        </div>
    )
}
