/**
 * Created by yashw on 14-02-2017.
 */

import ChatConstants from '../constants/ChatConstants';
import ChatActionDispatcher from '../dispatchers/ChatActionDispatcher';

let ChatActions = {
   sendMessage(msg,user){
       ChatActionDispatcher.dispatch({
           type: ChatConstants.SENT_MESSAGE,
           msg: msg,
           user: user
       })
   }
};

export default ChatActions;