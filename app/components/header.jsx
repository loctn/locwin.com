import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './css/header.css';

class Header extends Component {
  static propTypes = {
    styles: PropTypes.object
  }

  componentDidMount() {
    this.handleMobile();
  }

  handleMobile() {
    document.documentElement.classList.toggle('nav-hidden');
  }

  render() {
    return (
      <header styleName="component">
        <div styleName="container">
          <div styleName="mobile-toggle">
            <div onClick={this.handleMobile}>&equiv;</div>
          </div>
          <div styleName="heading">
            <div>I Am <strong>Loc Nguyen</strong> / JavaScript Developer</div>
          </div>
          <nav styleName="nav">
            <div><a href="http://locwin.com/resume/" target="_blank">Hire Me</a></div>
          </nav>
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles);