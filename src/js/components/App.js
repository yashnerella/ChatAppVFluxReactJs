import React from 'react';

import MessageDump from './MessageDump';
import ChatToolBox from './ChatToolBox';

class App extends React.Component {

   render() {
      return (
         <div>
             <h3>CHAT APPLICATION WITH VANILLA FLUX ARCHITECTURE:</h3>
             <MessageDump/>
             <label>U1: </label> <ChatToolBox user="U1"/>
             <label>U2: </label> <ChatToolBox user="U2"/>
         </div>
      );
   }
}


export default App;