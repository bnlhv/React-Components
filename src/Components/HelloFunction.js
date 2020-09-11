import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function HelloFunction(props) {
    
    //this is anti pattern
    const [message, setMessage] = useState(props.message)

    const changeText = () => {
        setMessage( message + ' new hook')
    }

    return (
        <>
            <h1>{message}</h1>
            <button onClick={changeText}>Click me</button>
        </>
    )
}

HelloFunction.propTypes = {
    message: PropTypes.string
}

HelloFunction.defaultProps = {
    message: 'this is default value'
}


