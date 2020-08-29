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


{/* <header class="header">
<img src="img/logo.png" alt="Logo" class="header__logo">
<form class="search">
    <input type="text" class="search__field" placeholder="Search over 1,000,000 recipes...">
    <button class="btn search__btn">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-magnifying-glass"></use>
        </svg>
        <span>Search</span>
    </button>
</form>
<div class="likes">
    <div class="likes__field">
        <svg class="likes__icon">
            <use href="img/icons.svg#icon-heart"></use>
        </svg>
    </div>
    <div class="likes__panel">
        <ul class="likes__list">
            <!--
            <li>
                <a class="likes__link" href="#23456">
                    <figure class="likes__fig">
                        <img src="img/test-1.jpg" alt="Test">
                    </figure>
                    <div class="likes__data">
                        <h4 class="likes__name">Pasta with Tomato ...</h4>
                        <p class="likes__author">The Pioneer Woman</p>
                    </div>
                </a>
            </li>
            -->
        </ul>
    </div>
</div> */}
// </header>