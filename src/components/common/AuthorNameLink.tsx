import {CSSProperties, FC} from "react"
import { NavLink} from "react-router-dom"

export const AuthorNameLink: FC<TitleLinkProps> = (props) => {
    const { type,name,color} = props

    const style:CSSProperties={
        color:color||'black'
    }

    return (
        <NavLink style={style} to={`/${type}/${name}`} end>
            <span>
                {name}
            </span>
        </NavLink>
    )

}

type TitleLinkProps = {
    name:string
    type:'user'|'community'
    color?: CSSProperties['color']|null
}