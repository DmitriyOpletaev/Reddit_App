import React, {FC} from "react"
import {PostData} from "../../../types/redux_types/posts-types"
import {Space} from "antd"
import {AvatarIconLink} from "../../common/AvatarIconLink"
import {AuthorNameLink} from "../../common/AuthorNameLink"
import  './CommunityPopover.scss'


export const CommunityPopoverTitle: FC<CommunityPopoverTitleProps> = (props) => {
    const {communityBackgroundColor, communityName, communityIcon} = props
    return (
        <Space className={'popover__title'}>
            <AvatarIconLink size={60} type={'community'} url={communityIcon}
                            navLink={`community/${communityName}`}/>

            <AuthorNameLink name={communityName} type={'community'}
                            color={communityBackgroundColor}/>
        </Space>
    )
}
type CommunityPopoverTitleProps = {
    communityName: PostData['community']['communityName']
    communityIcon: PostData['community']['communityIcon']
    communityBackgroundColor: PostData['community']['communityColor']
}