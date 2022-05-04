import m from './SearchBar.module.scss'
import {AutoComplete, Avatar, Col, Input, Row, Space} from "antd"
import {ChangeEvent, FC, useEffect, useState} from "react"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import {CloseCircleTwoTone, UserOutlined, TeamOutlined, LoadingOutlined, SearchOutlined} from "@ant-design/icons"
import 'antd/dist/antd.css'
import {useDispatch, useSelector} from "react-redux"
import {authSelector} from "../../../redux/selectors/auth-selectors"
import {searchCommunities} from "../../../redux/reducers/search-reducer"
import {searchSelector} from "../../../redux/selectors/search-selector"
import {SearchInput} from "./SearchInput";
import {NavLink} from "react-router-dom";

const users = [{name: 'Игорь Глушко', count: 17}, {name: 'Владимир Пупен', count: 18746}]

export const SearchBar: FC<SearchBarProps> = () => {
    const [searchTerm, setSearchTerm] = useState<null | string>(null)
    const dispatch = useDispatch()
    const accessToken = useSelector(authSelector.accessToken)
    useEffect(() => {
        accessToken && searchTerm && dispatch(searchCommunities(accessToken, searchTerm))
    }, [searchTerm])

    const searchResults = useSelector(searchSelector.communitiesSearchResults)
    const options = [
        {
            label: renderTitle('Спільноти'),
            options: searchResults.map(e => renderItem(e.communityName, e.communityName, e.communityIcon || 'community', e.communityNumSubscribers)),
        },
        {
            label: renderTitle('Пользователи'),
            options: users.map(e => renderItem(e.name, e.name, 'user', e.count)),
        },
    ]
    const isLoading = useSelector(searchSelector.isSearching)
    return (
        <AutoComplete
            listHeight={800}
            options={options}
            className={m.autoComplete}
            disabled={isLoading}
        >
            <SearchInput isLoading={isLoading} onSearchFunc={setSearchTerm}/>
        </AutoComplete>
    )
}
const renderItem = (value: string, title: string, avatar: string | 'user' | 'community', count: number) => ({
    value: title,
    label: (
        <NavLink to={`community/${title}`}>
        <Row justify={'space-between'}
             style={{
                 display: 'flex',
                 justifyContent: 'space-between',
             }}
        >
            <Space size={'middle'}>
                {avatar === 'community' ? <Avatar icon={<TeamOutlined/>}/> : avatar === 'user' ?
                    <Avatar icon={<UserOutlined/>}/> : <Avatar src={avatar}/>}
                {title}
            </Space>
            <span>{count}<UserOutlined/></span>
        </Row>
        </NavLink>
    ),
})
const renderTitle = (title: string) => (
    <span>
    {title}
        <a
            style={{float: 'right'}}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
      більше
    </a>
  </span>
)

type SearchInputProps = {}
type SearchBarProps = {}
type ClearIconProps = {
    clear: () => void,
}
type SearchIconProps = {
    search: () => void,
}