import {connect} from 'react-redux'
import SearchResult from './search-result.component'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = ({search:{isFetching}}) => ({
    isFetching
})

const SearchResultContainer = connect(mapStateToProps)(WithSpinner(SearchResult))

export default SearchResultContainer