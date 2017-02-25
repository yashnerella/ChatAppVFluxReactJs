/**
 * Created by yashw on 14-02-2017.
 */
import React, {Component} from 'react';

import ChatStore from '../stores/ChatStore'

class MessageDump extends React.Component {
    constructor(){
        super();
        this.state = {
            msgLog: ChatStore.getMsgLog()
        };
    }

    componentDidMount(){
        this.storeSubscription = ChatStore.addListener((data)=> this.handleStoreChange(data));
    };

    componentWillUnmount(){
        this.storeSubscription.remove();
    }

    handleStoreChange(){
        this.setState({
            msgLog: ChatStore.getMsgLog()
        });
    }

    render() {
        return (
            <div className="messagedump">

                <div>
                    {this.state.msgLog.map((msgLine, i)=>
                        <li key={i}>{msgLine}</li>
                    )}
                </div>
            </div>
        );
    }
}


export default MessageDump;