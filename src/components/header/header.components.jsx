import React from 'react'
import './header.style.css'
import SearchBox from '../search-box/search-box.component'
import Likes from '../likes/likes.component'


export const Header = () =>   (
    <header className = "header">
     <img alt='forkify-logo' className={"header__logo"} src={`https://sirlahm.github.io/Forkify/img/logo.png`}/> 
    <SearchBox/>
    <Likes/>
    </header>
)


export default Header


