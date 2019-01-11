import * as actions from './actionTypes';

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function toggleInputDisabled() {
  return {
    type: actions.TOGGLE_INPUT_DISABLED
  };
}

export function addUserMessage(conversationID, text) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    conversationID,
    text
  };
}

export function addResponseMessage(conversationID, text) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    conversationID,
    text
  };
}

export function addLinkSnippet(conversationID, link) {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    conversationID,
    link
  };
}

export function renderCustomComponent(component, props, showAvatar) {
  return {
    type: actions.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar
  };
}

export function dropMessages() {
  return {
    type: actions.DROP_MESSAGES
  };
}

export function hideAvatar() {
  return {
    type: actions.HIDE_AVATAR
  };
}

export function changeConversation(newConversationID) {
  return {
    type: actions.CHANGE_CONVERSATION,
    newConversationID
  };
}

export function changeTitle(newTitle) {
  return {
    type: actions.CHANGE_TITLE,
    newTitle
  };
}

export function changeSubtitle(newSubtitle) {
  return {
    type: actions.CHANGE_SUBTITLE,
    newSubtitle
  };
}

export function changeBadge(newBadge) {
  return {
    type: actions.CHANGE_BADGE,
    newBadge
  };
}