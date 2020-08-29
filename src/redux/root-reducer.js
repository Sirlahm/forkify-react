import {combineReducers} from 'redux'

import searchReducer from './search/search.reducer'
import recipeReducer from './recipe/recipe.reducer'
import shoppingReducer from './shopping-list/shopping-list.reducer'
import likesReducer from './likes/likes.reducer'

export default combineReducers({
    search: searchReducer,
    recipe:recipeReducer,
    likes: likesReducer,
    shoppingList : shoppingReducer 
})