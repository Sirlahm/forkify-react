export const getIngredientItem = ingredient => ({
    type : 'GET_SHOPPING_ITEM',
    payload : ingredient
})

export const removeIngredientItem = ingredient => ({
    type : 'REMOVE_SHOPPING_ITEM',
    payload : ingredient
})