import Search from "antd/es/input/Search";
import m from './SearchBar.module.scss'
import {AutoComplete} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "antd/es/avatar/avatar";
import { search, searchSelector} from "../../../redux/reducers/search_reducer";
import {getPosts} from "../../../redux/reducers/posts_reducer";
import {useNavigate} from "react-router-dom";
import {authSelector} from "../../../redux/selectors/auth_selectors";

export const SearchBar = () => {
    const accessToken = useSelector(authSelector.accessToken)
    const isSearching = useSelector(searchSelector.isSearching)
    const communitiesSearchResult = useSelector(searchSelector.communitiesSearchResult)
    const accountsSearchResults = useSelector(searchSelector.accountsSearchResults)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onSearch(searchQuery: string) {
        searchQuery && accessToken && dispatch(search(accessToken, searchQuery))
    }

    const options = communitiesSearchResult || accountsSearchResults ? [
        {
            label: renderTitle('Сообщества'),
            options: communitiesSearchResult && communitiesSearchResult.map(e => renderItem(e.communityName, e.subscribersCount, e.communityAvatar, e.keyColor)),
        },
        {
            label: renderTitle('Пользователи'),
            options: accountsSearchResults && accountsSearchResults.map(e => renderItem(e.accountName, null, e.accountAvatar, null)),
        },

    ] : []

    function onSelect(value: string) {
        navigate(`r/${value}/new`)
    }

    return (
        <div className={m.searchBar__container}>
            <AutoComplete
                listHeight={500}
                options={options}
                className={m.autocomplete}
                onSelect={onSelect}
            >
                <Search
                    loading={isSearching}
                    onSearch={onSearch}
                    size="middle"
                    placeholder="Поиск"/>
            </AutoComplete>
        </div>
    )
}


const renderTitle = (title: string) => (
    <span>
    {title}
        <a
            style={{float: 'right'}}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
      more
    </a>
  </span>
)

const renderItem = (title: string, count: number | null, img: string | null, color: string | null) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <div style={{color: color || 'black'}}>
                <Avatar src={img}/>
                {title}
            </div>

            <span>
        {count && count + ' участников'}
      </span>
        </div>
    )
})