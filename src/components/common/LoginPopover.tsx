import {FC, ReactNode} from "react"
import {Divider, Popover, Space} from "antd";
import {TooltipPlacement} from "antd/es/tooltip";
import {useSelector} from "react-redux";
import {authSelector} from "../../redux/selectors/auth-selector";
import {LoginButton} from "./LoginButton"
import Text from "antd/lib/typography/Text";
import './CommonElements.scss'
export const LoginPopover: FC<LoginPopoverProps> = (props) => {
    const {children, placement} = props
    const isUserAuthorize = useSelector(authSelector.isUserAuthorise)


    const LoginPopoverContent =
        <Space split={<Divider type={'vertical'} className={'space-divider'}/>}  >
            <Text type={'danger'} strong keyboard >
                Ви не авторизовані
            </Text>
            <LoginButton size={'small'}/>
        </Space>

    if (!isUserAuthorize) return (
        <Popover
            destroyTooltipOnHide={{keepParent:true}}
            autoAdjustOverflow={true}
            trigger={['click']}
            placement={placement}
            content={LoginPopoverContent}
            overlayClassName={'login-popover'}
        >
                {children}
        </Popover>
    )
    return (
           <>
               {children}
           </>
    )
}

type LoginPopoverProps = {
    children: ReactNode
    placement?: TooltipPlacement
}