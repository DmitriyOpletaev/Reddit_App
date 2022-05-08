import React, {useEffect} from 'react'
import m from './App.module.scss'
import {AppHeader} from "./components/header/Header"
import {useRedditAuth} from "./components/hooks/useRedditAuth"
import { Route, Routes} from 'react-router-dom'
import {CommunityPage} from "./components/community-page/CommunityPage"
import {HomePage} from "./components/home-page/HomePage";
import {UserPage} from "./components/user-page/UserPage";
import {useSelector} from "react-redux";
import {authSelector} from "./redux/selectors/auth-selector";


const App = () => {
    const {applicationAuthOnLoad, isLoadingAuthentication,accessToken} = useRedditAuth()
    const isAppAuthorize = useSelector(authSelector.isAppAuthorize)

    useEffect(() => {
        applicationAuthOnLoad()
    }, [])

    if (isLoadingAuthentication) return <div>Loading</div>
    if (!isAppAuthorize) return <div>Error</div>
    return (
            <section className={m.appLayout}>
                <AppHeader/>
                <Routes>
                    <Route path='/' element={<h1><HomePage/></h1>}/>
                    <Route path="community/:communityName" element={<CommunityPage/>}/>
                    <Route path="user/:userName" element={<UserPage/>}/>
                    <Route path='*' element={<h1>Error</h1>}/>
                </Routes>
            </section>
    )
}


export default App
