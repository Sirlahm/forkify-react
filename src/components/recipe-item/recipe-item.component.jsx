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
    
    const {image_url,ingredients,publisher,title,publisher_url,recipe_id} = searchItem
    
    return ( 
    <div>
        <figure className="recipe__fig">
                <img src={image_url} alt="Tomato" className="recipe__img"/>
                <h1 className="recipe__title">
                <span>{title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <StopWatch className="recipe__info-icon"/>
                    
                    <span class="recipe__info-data recipe__info-data--minutes">45</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                <Male className="recipe__info-icon fill"/>
                    <span class="recipe__info-data recipe__info-data--people">4</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny">
                            <ZoomOut className="fill"/>
                        </button>
                        <button class="btn-tiny">
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
                ingredients? ingredients.map(ingredient => <div className="recipe__item">
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
                <a className="btn-small recipe__btn" href={publisher_url} target="_blank">
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


    
    
//     <div class="recipe__ingredients">
//     <ul class="recipe__ingredient-list">
//         <li class="recipe__item">
//             <svg class="recipe__icon">
//                 <use href="img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__count">1000</div>
//             <div class="recipe__ingredient">
//                 <span class="recipe__unit">g</span>
//                 pasta
//             </div>
//         </li>

//         <li class="recipe__item">
//             <svg class="recipe__icon">
//                 <use href="img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__count">1/2</div>
//             <div class="recipe__ingredient">
//                 <span class="recipe__unit">cup</span>
//                 ricotta cheese
//             </div>
//         </li>

//         <li class="recipe__item">
//             <svg class="recipe__icon">
//                 <use href="img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__count">1</div>
//             <div class="recipe__ingredient">
//                 <span class="recipe__unit"></span>
//                 can of tomatoes, whole or crushed
//             </div>
//         </li>


//         <li class="recipe__item">
//             <svg class="recipe__icon">
//                 <use href="img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__count">1</div>
//             <div class="recipe__ingredient">
//                 <span class="recipe__unit"></span>
//                 can tuna packed in olive oil
//             </div>
//         </li>

//         <li class="recipe__item">
//             <svg class="recipe__icon">
//                 <use href="img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__count">1/2</div>
//             <div class="recipe__ingredient">
//                 <span class="recipe__unit">cup</span>
//                 grated parmesan cheese
//             </div>
//         </li>

//         <li class="recipe__item">
//             <svg class="recipe__icon">
//                 <use href="img/icons.svg#icon-check"></use>
//             </svg>
//             <div class="recipe__count">1/4</div>
//             <div class="recipe__ingredient">
//                 <span class="recipe__unit">cup</span>
//                 fresh basil, chopped or torn
//             </div>
//         </li>
//     </ul>

//     <button class="btn-small recipe__btn">
//         <svg class="search__icon">
//             <use href="img/icons.svg#icon-shopping-cart"></use>
//         </svg>
//         <span>Add to shopping list</span>
//     </button>
// </div>