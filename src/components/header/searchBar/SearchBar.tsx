import Search from "antd/es/input/Search";
import m from './SearchBar.module.scss'
import {AutoComplete} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../../../redux/reducers/auth_reducer";
import Avatar from "antd/es/avatar/avatar";
import {search, searchSelector} from "../../../redux/reducers/search_reducer";

export const SearchBar = () => {
    const userAuthTokens = useSelector(authSelector.userAuthTokens)
    const isSearching = useSelector(searchSelector.isSearching)
    const communitiesSearchResult = useSelector(searchSelector.communitiesSearchResult)
    const accountsSearchResults = useSelector(searchSelector.accountsSearchResults)
    const dispatch = useDispatch()

    function onSearch(searchQuery: string) {
        searchQuery && userAuthTokens && dispatch(search(userAuthTokens.access_token,searchQuery))
    }

    const options = communitiesSearchResult || accountsSearchResults ? [
        {
            label: renderTitle('Сообщества'),
            options: communitiesSearchResult && communitiesSearchResult.map(e => renderItem(e.communityName, e.subscribersCount,e.communityAvatar,e.keyColor)),
        },
        {
            label: renderTitle('Пользователи'),
            options: accountsSearchResults && accountsSearchResults.map(e => renderItem(e.accountName, null,e.accountAvatar,null)),
        },

    ]:[]
    return (
        <div className={m.searchBar__container}>
            <AutoComplete
                listHeight={500}
                options={options}
                className={m.autocomplete}
            >
                <Search
                    loading={isSearching}
                    onSearch={onSearch}
                    size="large"
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
);

const renderItem = (title: string, count: number | null,img:string|null,color:string|null) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <div style={{color:color||'black'}}>
                <Avatar src={img}/>
                {title}
            </div>

            <span>
        {count && count + ' участников'}
      </span>
        </div>
    ),
});