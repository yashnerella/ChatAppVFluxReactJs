/**
 * Created by yashw on 14-02-2017.
 */
import {EventEmitter} from 'fbemitter';
import ChatActionDispatcher from '../dispatchers/ChatActionDispatcher';
import ChatConstants from '../constants/ChatConstants';

let msgLog = [];
let __emitter = new EventEmitter();
var msgLine = "";

let ChatStore = {

    getMsgLog(){
        return msgLog;
    },

    addListener(callback){
        return __emitter.addListener(ChatConstants.CHANGE_EVENT, callback)
    }

};

ChatStore.dispatchToken = ChatActionDispatcher.register((action) =>{
    switch (action.type) {
        case ChatConstants.SENT_MESSAGE:
            msgLine = new Date().toLocaleTimeString() + "  " + action.user + ":  " + action.msg;
            msgLog.push(msgLine);
            msgLine = "";
            __emitter.emit(ChatConstants.CHANGE_EVENT);
            break;
    }
});

export default ChatStore;