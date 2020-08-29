import React from 'react'
import '../../global.style.css'
import {connect} from 'react-redux'
import {ReactComponent as CheckMark} from '../../assets/checkmark.svg'


const ShoppingList = ({ingredient}) => {



return (
    <div class="shopping">
            <h2 class="heading-2">My Shopping List</h2>


          <div className='shopping__list'>
          {
                 ingredient.map(item => item.map(items => <div className="shopping__item">
                 <CheckMark className="recipe__icon"/> 
                 <p className="shopping__description">{items}</p>
                 
                 
                 </div>
                    )
                    
                   ) 
            }
          </div>
            {/* <ul class="shopping__list">

               
                <li class="shopping__item"/>
                    <div class="shopping__count">
                        <input type="number" value="500" step="100"/>
                        <p>g</p>
                    </div>
                    <p class="shopping__description">Pasta</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                
                </ul> */}

            <div class="copyright">
                &copy; by Sirlahm Reedone. Inspired by Jonas Schmedtmann. Powered by
                <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>.
            </div>

    </div>
)

}

const mapStateToProps = ({shoppingList: {ingredient}}) =>( {
    ingredient,
  
    })
export default connect(mapStateToProps)(ShoppingList)