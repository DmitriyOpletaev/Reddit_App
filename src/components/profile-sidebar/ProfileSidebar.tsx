import {FC} from "react"
import m from './ProfileSidebar.module.scss'

export const ProfileSidebar: FC<profileSidebarProps> = () => {

    return (
        <div className={m.sidebarLayout}>
            <h1>

                Sidebar
            </h1>
        </div>
    )

}

type profileSidebarProps = {}