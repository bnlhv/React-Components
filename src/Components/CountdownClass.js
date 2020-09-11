import React from 'react'
import PropTypes from 'prop-types'

export default class CountdownClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: props.num
        }
    }

    static propTypes = {
        num: PropTypes.number.isRequired,
        cb: PropTypes.func.isRequired
    }

    componentDidMount() {
        setInterval( () => {
            this.setState( (prevState) => {
                return {
                    timeRemaining: prevState.timeRemaining -1
                }
            })
        }, 1000)
    }

    //clean stuff before removing the component
    //clean setInterval
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    //this will run at the end of every update cycle
    componentDidUpdate(prevProps, prevState) {
        if(prevState.timeRemaining === 1){
            this.props.cb();
        }
        if(prevProps.num !== this.props.num){
            this.setState({
                timeRemaining: this.props.num
            })
        }
    }

    render () {
        return (
            <h3>{this.state.timeRemaining}</h3>
        );
    }
}