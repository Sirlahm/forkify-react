import React from 'react'
import '../../global.style.css'
import {connect} from 'react-redux'
import {fetchRecipeAsync} from '../../redux/recipe/recipe.action'  


const LikeItem = ({item,fetchRecipeAsync}) => {
    const {image_url,publisher,title,recipe_id} = item
    
                           return  (<div className="likes__link"  onClick={() => fetchRecipeAsync(recipe_id)}>
                                <figure className="likes__fig">
                                    <img src={image_url} alt="Test"/>
                                </figure>
                                <div className="likes__data">
<h4 className="likes__name">{title}</h4>
                                    <p className="likes__author">{publisher}</p>
                                </div>
                            </div>)
                        
}

const mapDispatchToProps = dispatch => ({
    fetchRecipeAsync: (id) => dispatch(fetchRecipeAsync(id))
  })


export default connect(null,mapDispatchToProps)(LikeItem)