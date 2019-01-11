import { Map } from 'immutable';

import { createReducer } from '@utils/store';

import * as actionTypes from '../actions/actionTypes';

const initialState = Map({ showChat: false, disabledInput: false, conversationID: undefined, title: undefined, subtitle: undefined, badge: 0 });

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update('showChat', showChat => !showChat),

  [actionTypes.TOGGLE_INPUT_DISABLED]: state =>
    state.update('disabledInput', disabledInput => !disabledInput),

  [actionTypes.CHANGE_CONVERSATION]: (state, { newConversationID }) =>
    state.update('conversationID', conversationID => {
      return newConversationID
    }),
  [actionTypes.CHANGE_TITLE]: (state, { newTitle }) =>
    state.update('title', title => {
      return newTitle
    }),
  [actionTypes.CHANGE_SUBTITLE]: (state, { newSubtitle }) =>
    state.update('subtitle', subtitle => {
      return newSubtitle
    }),
  [actionTypes.CHANGE_BADGE]: (state, { newBadge }) =>
    state.update('badge', badge => {
      return newBadge
    }),
    
};

export default (state = initialState, action) => createReducer(behaviorReducer, state, action);
