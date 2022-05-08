import {RedditApiChildrenLink, RedditAPIListingResponse} from "../types/api_types/listing/listing_types";
import {PostData} from "../types/redux_types/posts-types";
import {RedditAPILink} from "../types/api_types/listing/links";


export function createPosts(postsFromApi: RedditAPIListingResponse<RedditApiChildrenLink>) {

    const posts: Array<PostData> = postsFromApi.data.children.map(
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
                sr_detail,likes
            } = element.data
            const keysMediaMetadata = media_metadata && Object.keys(media_metadata)
            const imageArray2 = media_metadata &&  keysMediaMetadata?.map(e=>media_metadata[e].s.u)
            const imageArray=preview?.images.map(e=>e.source.url)


            const {
                accept_followers,
                public_description,
                icon_img,community_icon,
                display_name,
                key_color:sr_key_color,
                primary_color:sr_primary_color,
                user_is_subscriber,
                user_is_banned,
                subscribers,
                banner_img,header_img,
                over_18:sr_over18,
                subreddit_type,
                name:communityId

            } = sr_detail
            const post:PostData = {
                postId: name,
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
                    communityId,
                    acceptFollowers: accept_followers,
                    communityMiniDescription: public_description,
                    communityType:subreddit_type,
                    isOver18: sr_over18,
                    keyColor: sr_key_color,
                    communityColor: sr_primary_color || null,
                    subscribersCount: subscribers,
                    communityBanner:banner_img || null,
                    communityHeaderImg:header_img||null,
                    authUserInfo:{
                        userIsBanned: user_is_banned||false,
                        userIsSubscribed: user_is_subscriber||false,
                        isLoadingSubscribing:false
                    }
                },
                userActivity:{
                    userRate:userRate(likes)
                }
            }
            return post
        })
    return posts
}

function userRate(likes:RedditAPILink['likes']):PostData['userActivity']['userRate']{
    if(likes === true)return 'like'
    if(likes === false)return 'dislike'
    else return 'none'
}