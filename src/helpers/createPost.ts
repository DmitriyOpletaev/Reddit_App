import {RedditApiChildrenLink, RedditAPIListingResponse} from "../types/api_types/listing_types";
import {PostsType} from "../redux/reducers/posts_reducer";

export function createPosts(postsFromApi: RedditAPIListingResponse<RedditApiChildrenLink>): Array<PostsType> {

    const posts:Array<PostsType> =   postsFromApi.data.children.map(
         (elem) => {
            const {id,name,created_utc,num_comments,over_18,title,selftext,media,url,author,author_fullname,sr_detail} = elem.data
            return ({
                    postId: id,
                    postFullName: name,
                    author: {
                        authorName:author,
                        authorId: author_fullname,
                    },
                    community:{
                        communityName:sr_detail.display_name,
                        communityIcon:sr_detail.icon_img,
                        communityId:sr_detail.name
                    },
                    createdTime: created_utc,
                    commentsCount: num_comments,
                    over18: over_18,
                    title: title,
                    selfText:selftext,
                    thumbnail: url,
                    video: media?.reddit_video?.hls_url
                })
        })
    return posts
}
