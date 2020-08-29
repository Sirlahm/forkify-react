import {connect} from 'react-redux'
import Recipe from './recipe.component'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = ({recipe:{isFetching}}) => ({
    isFetching 
})      

const RecipeItemContainer = connect(mapStateToProps)(WithSpinner(Recipe))

export default RecipeItemContainer