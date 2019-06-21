import React, { Component } from 'react';
import { Widget, addResponseMessage, toggleWidget, isWidgetOpened, dropMessages, changeConversation, getConversation } from '../index';
import { Record } from 'immutable';

export default class App extends Component {

  handleNewUserMessage = (newMessage) => {
    addResponseMessage(getConversation(), newMessage);
  };
  handleOpenConversation = (channelID) => {
    
    if (!isWidgetOpened()) {
      toggleWidget();
 
    }
         // TODO: 
      // 1. Clean store
      // 2. Update title
      console.debug("old conv: " + getConversation());
      console.debug("open conv: " + channelID);
      //dropMessages();
      changeConversation(channelID)

  };
  render() {
    return (
      <div>
         <button onClick={e => this.handleOpenConversation("1")}> channel 1</button>
         <button onClick={e => this.handleOpenConversation("2")}> channel 2</button>
         <Widget
          senderPlaceHolder="Type a messages ..."
          handleNewUserMessage={this.handleNewUserMessage}
          badge={1}
          showCloseButton={true}
          // autofocus={true}
          launcher={handleToggle => {

          }}
          />  
      </div>
      
    );
  }
}
