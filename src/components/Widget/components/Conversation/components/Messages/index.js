import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { hideAvatar } from '@actions';

import './styles.scss';

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  if (messagesDiv) messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

class Messages extends Component {
  componentDidMount() {
    scrollToBottom();
  }

  componentDidUpdate() {
    scrollToBottom();
  }

  getComponentToRender = message => {
    const ComponentToRender = message.get('component');
    var messages = this.getMessages(messages);
    const previousMessage = messages.get()
    if (message.get('type') === 'component') {
      return <ComponentToRender {...message.get('props')} />;
    }
    return <ComponentToRender message={message} />;
  };

  shouldRenderAvatar = (message, index) => {
    var messages = this.getMessages(messages);
    const previousMessage = messages.get(index - 1);
    if (message.get('showAvatar') && previousMessage.get('showAvatar')) {
      this.props.dispatch(hideAvatar(index));
    }
  }

  getMessages = () => {
    const { conversations, conversationID } = this.props;
    var messages = List([]);
    if (conversations.has(conversationID)) {
       messages = conversations.get(conversationID)
    }
    return messages;
  }

  render() {
    const { profileAvatar } = this.props;
    var messages = this.getMessages(messages);
    return (
      <div id="messages" className="rcw-messages-container">
        {
          messages.map((message, index) =>
          <div className="rcw-message" key={index}>
            {profileAvatar &&
              message.get('showAvatar') &&
              <img src={profileAvatar} className="rcw-avatar" alt="profile" />
            }
            {this.getComponentToRender(message)}
          </div>
        )}
      </div>
    );
  }
}

Messages.propTypes = {
  conversations: ImmutablePropTypes.map,
  conversationID: PropTypes.string,
  profileAvatar: PropTypes.string
};

export default connect(store => ({
  conversations: store.messages,
  conversationID: store.behavior.get('conversationID'),
}))(Messages);
