import React  from 'react'

import ReactPaginate from 'react-paginate'
import '../../global.style.css'
import {connect} from 'react-redux'
import SearchItem from '../search-item/search-item.component'


 class SearchResult extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       offset: 0,
       data:[],
       perPage: 10,
       currentPage: 0,
       slice: []
     }
    };
     handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });
    }
   receivedData= () => {
      if(this.props.searchItem) {
        this.setState({
          pageCount: Math.ceil(this.props.searchItem.length / this.state.perPage),
          slice : this.props.searchItem.slice(this.state.offset, this.state.offset + this.state.perPage)

         
      })
      }
            
        };

  componentDidMount() {
    this.receivedData()
    // console.log('COP')
    console.log(this.state)
  }
 
render() {

  const {searchItem,tt} = this.props;
  console.log(this.state)
  
  return (
    
    <div className= 'results'>
        
          {
         
               searchItem? this.state.slice.map(search => <SearchItem key={search.recipe_id} search={search} />)  : <h1 className='util'>No Search Found</h1>
             }
              
               {
                 searchItem && searchItem.length > 1 ?  <ReactPaginate
                 previousLabel={"prev"}
                 nextLabel={"next"}
                 breakLabel={"..."}
                 breakClassName={"break-me"}
                 pageCount={this.state.pageCount}
                 marginPagesDisplayed={2}
                 pageRangeDisplayed={5}
                 onPageChange={this.handlePageClick}
                 containerClassName={"pagination"}
                 subContainerClassName={"pages pagination"}
                 activeClassName={"active"}/>  : null
               }

        
        </div>
       
      
  )
}
}


const mapStateToProps = ({search: {searchItem,tt}}) =>( {
searchItem ,
tt
})


export default connect(mapStateToProps)(SearchResult)

