import {SearchActionTypes} from './search.types'

const INITIAL_STATE = {
    searchItem: [],
    isFetching: false,
    errorMessage : undefined,
    tt: true
}

const searchReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case SearchActionTypes.SEARCH_ITEM_START : 
    return {
        ...state,
        isFetching: true
        
    }
    case SearchActionTypes.SEARCH_ITEM_SUCCESS : 
    return {
        ...state,
        searchItem : action.payload['recipes'],
        isFetching: false,
        tt: false
    }
    case SearchActionTypes.SEARCH_ITEM_ERROR : 
    return {
        ...state,
        searchItem: undefined,
        errorMessage : action.payload,
        isFetching: false,
        tt: true
        
    }
    default: 
    return state;
   }
   
    
}

export default searchReducer