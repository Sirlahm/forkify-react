import React from 'react'
import './with-spinner.styles.css'


const  WithSpinner = WrappedComponent => ({isFetching,...otherProps}) => {
    return isFetching? (

        <div className='SpinnerOverlay'>
            <div className='SpinnerContainer'></div>
        </div>
         
    ) : (
        <WrappedComponent {...otherProps}/>
    )
}

export default WithSpinner