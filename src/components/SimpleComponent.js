// Code SimpleComponent Here
import React from 'react'; 

export default class SimpleComponent extends React.Component {

    state = {
        mood: "happy"
    }

    handleClick = (event) => {
        // event.preventDefault() 
        this.setState({
            mood: "sad"
        })
    }
        render () {
            return (
                <div onClick={this.handleClick}>
                    {this.state.mood}
                </div>
            )
        }
}