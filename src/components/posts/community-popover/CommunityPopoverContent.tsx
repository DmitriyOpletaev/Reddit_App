import {PostData} from "../../../types/redux_types/posts-types";
import React, {FC} from "react";
import { Divider, Space} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {SubscribeCommunityButton} from "../../common/SubscribeCommunityButton"
import './CommunityPopover.scss'
import {BlockProps} from "antd/es/typography/Base";


const paragraphEllipsis:BlockProps['ellipsis']={
    rows: 5,
    expandable: true,
    symbol: 'далі'
}

export const CommunityPopoverContent: FC<CommunityPopoverContentProps> = (props) => {
    const {subscribersCount,communityId, communityMiniDescription, userIsSubscribed,communityBackgroundColor,isLoadingSubscribing} = props
    const subscribeCommunityProps = {communityId,userIsSubscribed,isLoadingSubscribing,buttonColor:communityBackgroundColor}

    return (
        <div className={'popover__content'}>
            <Space
                split={<Divider type="vertical"/>}
                size={'small'}
                className={'subscriber__block'}
            >
                    <span>
                        {subscribersCount} підписників
                    </span>
                <SubscribeCommunityButton  {...subscribeCommunityProps} size={'small'}/>
            </Space>
            <Paragraph ellipsis={paragraphEllipsis}>
                {communityMiniDescription}
            </Paragraph>
        </div>
    )
}

type CommunityPopoverContentProps = {
    subscribersCount: PostData['community']['subscribersCount']
    communityMiniDescription: PostData['community']['communityMiniDescription']
    communityBackgroundColor: PostData['community']['communityColor']
    isLoadingSubscribing:PostData['community']['authUserInfo']['isLoadingSubscribing']
    userIsSubscribed:PostData['community']['authUserInfo']['userIsSubscribed']
    communityId:PostData['community']['communityId']
}
