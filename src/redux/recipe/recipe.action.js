import {RecipeActionTypes} from './recipe.types'


export const fetchRecipeStart = () =>( {
    type: RecipeActionTypes.RECIPE_ITEM_START
})

export const fetchRecipeSuccess = item => ({
    type: RecipeActionTypes.RECIPE_ITEM_SUCCESS,
    payload: item
})

export const fetchRecipeError = error => ({
    type: RecipeActionTypes.RECIPE_ITEM_ERROR,
    payload: error
})


export const fetchRecipeAsync = (id) => {
    // const search = search
    return dispatch => {


        dispatch(fetchRecipeStart())
        // console.log(`https://forkify-api.herokuapp.com/api/get?rId=47746`)
         fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`).then(response => response.json())
          .then(data => dispatch(fetchRecipeSuccess(data.recipe)))
        .catch(error => { alert('ERROR PROCESSING RECIPE')
        return dispatch(fetchRecipeError(error))})
    }
}
// `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
// .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
// .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// } 