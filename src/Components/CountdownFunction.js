import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

export default function CountdownFunction(props) {

    const [timeRemaining, setTimeRemaining] = useState(null)
    
    //componentDidMount, componentDidUpdate, componentWillUnmount 

        //set the timer
        useEffect(() => {
            const intervalId = setInterval( () => {
                setTimeRemaining(timeRemaining - 1) 
            },1000) 

            return () => {
                clearInterval(intervalId);
            }
        })

        //call the callback when we reach zero

        useEffect(() => {
            if (timeRemaining === 0) {
                props.cb();
            }
        
        })

        //init the state if the props change

        useEffect(() => {
            setTimeRemaining(props.num)            
        }, [props.num])

      return (
        <h3>{timeRemaining}</h3>
      )
}


CountdownFunction.propTypes = {
    num: PropTypes.number.isRequired
}