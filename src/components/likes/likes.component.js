import React from 'react'
import '../../global.style.css'
import LikeItem from './likes-item.component'
import {ReactComponent as Heart} from '../../assets/heart.svg'
import {connect} from 'react-redux'


const Likes = ({items,display}) => (


    <div className="likes">
                <div class="likes__field">
                    {
                         items.length == 0  ?  null : <Heart className="likes__icon"/> 
                    }
                    
                    
                </div>
                <div className="likes__panel">
                    <div className="likes__list">
                      {   
                      items.map(item => <LikeItem item = {item}/>)
                      }
                        
                        
                       
                    </div>
                </div>
    </div>
)

const mapStateToProps = ({likes : {items,display}}) => ({
    items,
    display
    })

export default connect(mapStateToProps)(Likes)