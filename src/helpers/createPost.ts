import {RedditApiChildrenLink, RedditAPIListingResponse} from "../types/api_types/listing/listing_types";
import {Post} from "../types/redux_types/posts-types";


export function createPosts(postsFromApi: RedditAPIListingResponse<RedditApiChildrenLink>) {

    const posts: Array<Post> = postsFromApi.data.children.map(
        (element) => {
            const {
                id,
                name,
                created_utc,
                num_comments,
                over_18,
                title,
                selftext,
                media,
                preview,
                author,
                media_metadata,
                author_fullname,
                author_flair_text,
                author_flair_text_color,
                sr_detail
            } = element.data
            const keysMediaMetadata = media_metadata && Object.keys(media_metadata)
            const imageArray2 = media_metadata &&  keysMediaMetadata?.map(e=>media_metadata[e].s.u)
            const imageArray=preview?.images.map(e=>e.source.url)


            const {
                accept_followers,
                public_description,
                icon_img,community_icon,
                display_name,
                key_color,
                primary_color,
                user_is_subscriber,
                user_is_banned,
                subscribers
            } = sr_detail
            const post:Post = {
                postId: id,
                postFullName: name,
                createdTime: created_utc,
                commentsCount: num_comments,
                over18: over_18,
                title: title,
                selfText: selftext,
                imgUrls: imageArray || imageArray2 || null,
                video: media?.reddit_video?.hls_url || null,
                author: {
                    authorName: author,
                    authorId: author_fullname || null,
                    authorFlairText: author_flair_text||null,
                    authorFlairTextColor: author_flair_text_color||null,
                },
                community: {
                    communityName: display_name,
                    communityIcon: community_icon ? community_icon : icon_img.length>0 ? icon_img : null ,
                    communityId: sr_detail.name,
                    acceptFollowers: accept_followers,
                    publicDescription: public_description,
                    isOver18: sr_detail.over_18,
                    keyColor: key_color,
                    primaryColor: primary_color,
                    subscribersCount: subscribers,
                    userIsBanned: user_is_banned,
                    userIsSubscribed: user_is_subscriber,
                }
            }
            return post
        })
    return posts
}
