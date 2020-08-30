import React from 'react'
import './search-box.style.css'
import {ReactComponent as ShoppingIcon} from '../../assets/search.svg'
import {connect} from 'react-redux'

import { fetchItemAsync} from '../../redux/search/search.action'

class SearchBox extends React.Component {
    constructor() {
        super()

        this.state = {
            search: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchItemAsync(this.state.search)
        this.setState({search: ''})
    }
    handleChange = event => {
         
        const {value} = event.target
        this.setState({search: value})
    }

render() {

    return(
<form className="search">
<input 
    className='search__field'
    value= {this.state.search}
    type='text' 
    placeholder="Search over 1,000,000 recipes..." 
    onChange={this.handleChange}/>
<button className="btn search__btn" onClick={this.handleSubmit}>
<ShoppingIcon className='search__icon'/>
<span>Search</span>
</button>

</form>
    )
}
}
const mapDispatchToProps = dispatch => ({
    fetchItemAsync: (item) => dispatch(fetchItemAsync(item))
  })
  
export default connect(null, mapDispatchToProps)(SearchBox)

