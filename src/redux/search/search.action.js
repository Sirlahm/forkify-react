import {SearchActionTypes} from './search.types'


export const fetchItemStart = () =>( {
    type: SearchActionTypes.SEARCH_ITEM_START
})

export const fetchItemSuccess = item => ({
    type: SearchActionTypes.SEARCH_ITEM_SUCCESS,
    payload: item
})

export const fetchItemError = error => ({
    type: SearchActionTypes.SEARCH_ITEM_ERROR,
    payload: error
})


export const fetchItemAsync = (search) => {
    // const search = search
    return dispatch => {

        

        dispatch(fetchItemStart())
        console.log(`https://forkify-api.herokuapp.com/api/search?&q=${search}`)
         fetch(`https://forkify-api.herokuapp.com/api/search?&q=${search}`).then(response => response.json())
          .then(data => dispatch(fetchItemSuccess(data)))
        .catch(error => { alert('N0 SEARCH FOUND')
        return dispatch(fetchItemError(error))})
    }
}

// .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
// .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// } 