import React from 'react'
import RecipeItem from '../recipe-item/recipe-item.component'
import '../../global.style.css'
import {connect} from 'react-redux'


const Recipe = ({trya}) => (

    <div className='recipe'>
        {
            trya? null : <RecipeItem/>
        }
      
    </div>
    
)




    
const mapStateToProps = ({recipe: {searchItem,trya}}) =>( {
    trya
    })
export default connect(mapStateToProps)(Recipe)