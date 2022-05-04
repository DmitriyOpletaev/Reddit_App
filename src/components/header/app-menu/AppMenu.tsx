import {FC} from "react"
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons'
import {Menu} from "antd";
import m from './AppMenu.module.scss'

const menuItemsData = [
    {
        title: 'Home',
        icon: <MailOutlined/>,
    },
    {
        title: 'Settings',
        icon: <AppstoreOutlined/>,
    },
    {
        title: 'Profile',
        icon: <AppstoreOutlined/>,
    },
    {
        title: 'Connect',
        icon: <AppstoreOutlined/>,
    },
    {
        title: 'qqweqwe',
        icon: <AppstoreOutlined/>,
    },

]

export const AppMenu: FC<AppMenuProps> = () => {

    const MenuItems = menuItemsData.map(e => (
            <Menu.Item
                icon={e.icon}
                title={e.title}
                className={m.menuItem}

            >
            </Menu.Item>
        )
    )
    return (
        <Menu
            inlineCollapsed={true}
            overflowedIndicator={<AppstoreOutlined/>}
            mode={'horizontal'}
            className={m.appMenu}
        >
            {MenuItems}
        </Menu>
    )

}

type AppMenuProps = {}