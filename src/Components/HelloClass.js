import React from 'react'
import PropTypes from 'prop-types'


export default class HelloClass extends React.Component {
    
    constructor(props){
        super(props);
        //this is an anty pattern
        this.state = {
            msg: props.msg
        }
    }

    static propTypes = {
        msg: PropTypes.string.isRequired
    }

    static defaultProps = {
        msg: 'default msg'
    }

    //we would change the text
    changeText = () => {

        //alert(this.props.msg)
        
        //this.setState({ 
        //    msg: 'the message has changed by pressing the button' 
        //});

        //anti pattern
        //this.setState({ 
        //    msg: this.state.msg + ' hello agian' 
        //});

        this.setState( (prevState) => {
            return {
                msg: prevState.msg + ' hello again'
            }
        })    
    }
    
    render () {
        return (
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeText}>Change Text</button>
            </>
        );
    }
}
