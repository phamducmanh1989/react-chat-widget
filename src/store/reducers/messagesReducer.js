import { Map, List } from 'immutable';

import { createReducer } from '@utils/store';
import { createNewMessage, createLinkSnippet, createComponentMessage } from '@utils/messages';
import { MESSAGE_SENDER } from '@constants';

import * as actionTypes from '../actions/actionTypes';

const initialState = Map({}); 

const messagesReducer = {
  [actionTypes.ADD_NEW_USER_MESSAGE]: (state, { conversationID, text }) => 
    {
      if (!state.has(conversationID)) {
        state = state.set(conversationID, List([]));
      }
      return state.update(conversationID, msg => {
        return msg.push(createNewMessage(text, MESSAGE_SENDER.CLIENT));
      });
    },

  [actionTypes.ADD_NEW_RESPONSE_MESSAGE]: (state, { conversationID, text }) =>
    {
      if (!state.has(conversationID)) {
        state = state.set(conversationID, List([]));
      }
      return state.update(conversationID, msg => {
        return msg.push(createNewMessage(text, MESSAGE_SENDER.RESPONSE));
      });
    },

  [actionTypes.ADD_NEW_LINK_SNIPPET]: (state, { conversationID, link }) =>
    {
      if (!state.has(conversationID)) {
        state = state.set(conversationID, List([]));
      }
      return state.update(conversationID, msg => {
        return msg.push(createLinkSnippet(link, MESSAGE_SENDER.RESPONSE));
      });
    },

  [actionTypes.ADD_COMPONENT_MESSAGE]: (state, { component, props, showAvatar }) =>
    state.push(createComponentMessage(component, props, showAvatar)),

  [actionTypes.DROP_MESSAGES]: () => Map({}),

  [actionTypes.HIDE_AVATAR]: (state, { conversationID, index }) =>
  {
    if (!state.has(conversationID)) {
      state = state.set(conversationID, List([]));
    }

    return state.update(conversationID, msg => {
      return msg.update(index, message => message.set('showAvatar', false));
    }); 
  }
    
}

export default (state = initialState, action) => createReducer(messagesReducer, state, action);
