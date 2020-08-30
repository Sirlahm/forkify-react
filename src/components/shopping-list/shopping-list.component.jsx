import React from 'react'
import '../../global.style.css'
import {connect} from 'react-redux'
import {ReactComponent as CheckMark} from '../../assets/checkmark.svg'


const ShoppingList = ({ingredient}) => {



return (
    <div className="shopping">
            <h2 className="heading-2">My Shopping List</h2>


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
           

            <div className="copyright">
                &copy; by Sirlahm Reedone. Inspired by Jonas Schmedtmann. Powered by
                <a href="http://food2fork.com"  className="link">Food2Fork.com</a>.
            </div>

    </div>
)

}

const mapStateToProps = ({shoppingList: {ingredient}}) =>( {
    ingredient,
  
    })
export default connect(mapStateToProps)(ShoppingList)