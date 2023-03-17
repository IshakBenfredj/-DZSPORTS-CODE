import React from 'react'
import './style.css'
import Landing from './Landing'
import PopularSports from './PopularSports'
import Using from './Using'
import Advices from './Advices'

const Home = () => {
    return (
        <>
            <Landing />
            <PopularSports />
            <Using />
            <Advices />
        </>
    )
}

export default Home