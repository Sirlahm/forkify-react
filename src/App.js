import React from 'react';
import Header from './components/header/header.components'
import './App.css';
import SearchResult from './components/Search-Result/search-result.container'
import Recipe from './components/recipe/recipe-item.container'
import ShoppingList from './components/shopping-list/shopping-list.component'
const App = () => (
  <div className= 'container'>
    <Header/>
    <SearchResult/>
    <Recipe/>
    <ShoppingList/>
  </div>
)

export default App;
