import React, {useEffect} from 'react'
import m from './App.module.scss'
import {AppHeader} from "./components/header/Header"
import {useRedditAuth} from "./components/hooks/useRedditAuth"
import { Route, Routes} from 'react-router-dom'
import {CommunityPage} from "./components/community-page/CommunityPage"


const App = () => {
    const {applicationAuthOnLoad, isLoadingAuthentication,accessToken} = useRedditAuth()

    useEffect(() => {
        applicationAuthOnLoad()
    }, [])

    if (isLoadingAuthentication) return <div>Loading</div>
    /*if (!accessToken) return <div>Error</div>*/
    return (
            <section className={m.appLayout}>
                <AppHeader/>
                <Routes>
                    <Route path='/' element={<h1>Home</h1>}/>
                    <Route path="community/:communityName" element={<CommunityPage/>}/>
                    <Route path="community" element={<h1>CommunitySearch</h1>}/>
                    <Route path='*' element={<h1>Error</h1>}/>
                </Routes>
            </section>
    )
}


export default App
