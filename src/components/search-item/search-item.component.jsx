import React from 'react'
import '../../global.style.css'
import {connect} from 'react-redux'

import {fetchRecipeAsync} from '../../redux/recipe/recipe.action'  

const SearchItem =({search,fetchRecipeAsync,searchItem}) => {
 const {title,publisher,image_url,recipe_id} = search

    return <a className={`${recipe_id === searchItem.recipe_id? 'results__link--active' : ''} results__link `} href='#' onClick={() => fetchRecipeAsync(recipe_id)}>
        <figure className="results__fig">
        <img src={image_url}alt="Test"/>
    </figure>
      <div className="results__data">
        <h4 className="results__name">{title}.</h4>
<p className="results__author">{publisher}</p>
    </div>
    </a>
}

const mapDispatchToProps = dispatch => ({
    fetchRecipeAsync: (id) => dispatch(fetchRecipeAsync(id))
  })
  const mapStateToProps = ({recipe: {searchItem}}) => ( {
    searchItem,
    // {`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}
    })
export default connect(mapStateToProps,mapDispatchToProps)(SearchItem)




  