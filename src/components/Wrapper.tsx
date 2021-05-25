import React from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from './Footer/index'
import Feeds from './Feeds/index'

export default function Wrapper() {
    return (
        <>
            <Navbar />
                <Feeds />
            <Footer />
        </>
    )
}
