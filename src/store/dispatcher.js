import store from './store';
import * as actions from './actions';

export function addUserMessage(conversationID, text) {
  store.dispatch(actions.addUserMessage(conversationID, text));
}

export function addResponseMessage(conversationID, text) {
  store.dispatch(actions.addResponseMessage(conversationID, text));
}

export function addLinkSnippet(conversationID, link) {
  store.dispatch(actions.addLinkSnippet(conversationID, link));
}

export function renderCustomComponent(component, props, showAvatar = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}

export function isWidgetOpened() {
  return store.getState().behavior.get('showChat');
}

export function changeConversation(newConversationID) {
  store.dispatch(actions.changeConversation(newConversationID));
}

export function getConversation() {
  return store.getState().behavior.get('conversationID');
}

export function changeTitle(newTitle) {
  store.dispatch(actions.changeTitle(newTitle));
}

export function changeSubtitle(newSubtitle) {
  store.dispatch(actions.changeSubtitle(newSubtitle));
}

export function changeBadge(newBadge) {
  store.dispatch(actions.changeBadge(newBadge));
}