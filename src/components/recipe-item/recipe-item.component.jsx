import React from 'react'
import {connect} from 'react-redux'
import '../../global.style.css'
import {getLikeItem} from '../../redux/likes/likes.action'
import {getIngredientItem,removeIngredientItem} from '../../redux/shopping-list/shopping-list.action'
import {ReactComponent as StopWatch} from '../../assets/stopwatch.svg'
import {ReactComponent as ZoomIn} from '../../assets/plus-circle-solid.svg'
import {ReactComponent as ZoomOut} from '../../assets/minus-circle-solid.svg'
import {ReactComponent as CheckMark} from '../../assets/checkmark.svg'
import {ReactComponent as Point} from '../../assets/point-right.svg'
import {ReactComponent as Heart} from '../../assets/heart.svg'
import {ReactComponent as Cart} from '../../assets/cart-arrow-down-solid.svg'
import {ReactComponent as Male} from '../../assets/male-solid.svg'
import {ReactComponent as HeartLine} from '../../assets/heart-regular.svg'
// import Ingredient from '../ingredient/ingredient.component'
const RecipeItem = ({searchItem, getLikeItem,items,getIngredientItem,removeIngredientItem}) => {
    
    const {image_url,ingredients,publisher,title,recipe_id,source_url} = searchItem
    
    return ( 
    <div>
        <figure className="recipe__fig">
                <img src={image_url} alt="Tomato" className="recipe__img"/>
                <h1 className="recipe__title">
                <span>{title}</span>
                </h1>
            </figure>
            <div className="recipe__details">
                <div className="recipe__info">
                    <StopWatch className="recipe__info-icon"/>
                    
                    <span className="recipe__info-data recipe__info-data--minutes">45</span>
                    <span className="recipe__info-text"> minutes</span>
                </div>
                <div className="recipe__info">
                <Male className="recipe__info-icon fill"/>
                    <span className="recipe__info-data recipe__info-data--people">4</span>
                    <span className="recipe__info-text"> servings</span>

                    <div className="recipe__info-buttons">
                        <button className="btn-tiny">
                            <ZoomOut className="fill"/>
                        </button>
                        <button className="btn-tiny">
                        <ZoomIn className="fill"/>
                        </button>
                    </div>

                </div>
                <button className="recipe__love">
           { items.find(Item => Item.recipe_id === recipe_id)
        ? <Heart className="search__icon" onClick= {() => getLikeItem(searchItem)}/> :
        <HeartLine className="search__icon" onClick= {() => getLikeItem(searchItem)}/>
           }

    
                


                </button>
                </div>
                <div className="recipe__ingredients">
                     <div className="recipe__ingredient-list">
                     {
                ingredients? ingredients.map(ingredient => <div key={ingredient.recipe_id} className="recipe__item">
                    <CheckMark className="recipe__icon"/> 
                    <p className="recipe__count">{ingredient}</p>
                    
                    
                    </div>) : ''
            }
                     </div>
                     <div className={'buttondisplay'}>
                     <button className="btn-small recipe__btn bottom" onClick= {()=>getIngredientItem(ingredients) }>
                         
                         <Cart/>
                         <span>Add to shopping list</span>
                     </button>
                     <button className="btn-small recipe__btn" onClick= {()=>removeIngredientItem(ingredients) }>
                                          
                                          <Cart/>
                                          <span>Remove from shopping list</span>
                                      </button>
                     </div>
                     
                 </div>
    
                
            <div className="recipe__directions">
                <h2 className="heading-2">How to cook it</h2>
                <p className="recipe__directions-text">
                    This recipe was carefully designed and tested by 
                    <span className="recipe__by"> {publisher} </span>. Please check out directions at their website.
                </p>
                <a className="btn-small recipe__btn" href={source_url} >
                    <span>Directions</span>
                    <Point className="search__icon"/>
                    

                </a>
            </div>

    </div>
    
   
    
)
}
const mapDispatchToProps = dispatch => ({
    getLikeItem: (item) => dispatch(getLikeItem(item)),
    getIngredientItem : (item) => dispatch(getIngredientItem(item)),
    removeIngredientItem: (item) => dispatch(removeIngredientItem(item))
  })
const mapStateToProps = ({recipe: {searchItem},likes : {items}}) =>( {
    searchItem,
    items
    })

 export default connect(mapStateToProps,mapDispatchToProps)(RecipeItem)
