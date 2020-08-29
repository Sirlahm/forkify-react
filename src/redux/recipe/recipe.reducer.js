import {RecipeActionTypes} from './recipe.types'

const INITIAL_STATE = {
    searchItem: [],
    isFetching: false,
    errorMessage : undefined,
    trya : true
}

const recipeReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case RecipeActionTypes.RECIPE_ITEM_START : 
    return {
        ...state,
        isFetching: true
        
    }
    case RecipeActionTypes.RECIPE_ITEM_SUCCESS : 
    return {
        ...state,
        searchItem : action.payload,
        isFetching: false,
        trya : false
    }
    case RecipeActionTypes.RECIPE_ITEM_ERROR : 
    return {
        ...state,
        searchItem: [],
        errorMessage : action.payload,
        isFetching: false,
        trya : true

        
    }
    default: 
    return state;
   }
   
    
}

export default recipeReducer