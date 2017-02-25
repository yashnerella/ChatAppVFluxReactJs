/**
 * Created by yashw on 05-02-2017.
 */
import React from 'react';

import ChatActions from '../actions/ChatActions';

class ChatToolBox extends React.Component{
    constructor(){
        super();
        this.state = {
            uMsg: ""
        };
    }

    handleChange(event) {
        this.setState({
            uMsg: event.target.value
        })
    }

    handleClick(){
        ChatActions.sendMessage(this.state.uMsg, this.props.user)
        this.setState({
            uMsg: ""
        })
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="enter your message" onChange={this.handleChange.bind(this)}
                       value={this.state.uMsg}/>
                <button onClick={this.handleClick.bind(this)}>Send</button>
            </div>
        );
    }
}

export default ChatToolBox;