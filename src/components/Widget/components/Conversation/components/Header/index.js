import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import close from '@assets/clear-button.svg';

import './style.scss';

class Header extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { title, subtitle, toggleChat, showCloseButton, titleAvatar } = this.props;
    return (
      <div className="rcw-header">
      {showCloseButton &&
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      }
      <h4 className="rcw-title">
        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile" />}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  titleAvatar: PropTypes.string,
};
export default connect(store => ({
  title: store.behavior.get('title'),
  subtitle: store.behavior.get('subtitle'),
}))(Header);
