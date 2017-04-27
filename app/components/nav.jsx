import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Avatar from './avatar';

import styles from './css/nav.css';

const sections = [
  { selector: '#intro', title: 'How It All Started' },
  { selector: '#favorite', title: 'Favorite Projects' },
  { selector: '#hackathons', title: 'Hackathons' },
  { selector: '#past', title: 'Past Projects' },
  { selector: '#learn', title: 'Learn More' }
];

class Nav extends Component {
  static propTypes = {
    styles: PropTypes.object
  }

  state = {
    section: 0
  }

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll = () => {
    this.scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.cacheSectionElements() && !this.isTicking) {
      window.requestAnimationFrame(() => {
        let newSection = this.state.section;
        for (let i = 0; i < sections.length; i++) {
          if (this.scrollY >= document.body.offsetHeight - window.innerHeight - 2) {
            newSection = sections.length - 1;
          } else if (newSection > 0 && this.scrollY < sections[newSection].element.offsetTop - 2) {
            newSection--;
          } else if (newSection < sections.length - 1 && this.scrollY >= sections[newSection + 1].element.offsetTop - 2) {
            newSection++;
          }
        }
        if (newSection !== this.state.section) {
          this.setState({ section: newSection });
        }
        this.isTicking = false;
      });
    }
    this.isTicking = true;
  }

  // Make sure all sections have been rendered
  cacheSectionElements() {
    if (sections.isCached) return true;
    for (let section of sections) {
      section.element = document.querySelector(section.selector);
      if (!section.element) return false;
    }
    sections.isCached = true;
    return true;
  }

  render() {
    const styles = this.props.styles;
    return (
      <div styleName="component">
        <div styleName="avatar">
          <Avatar />
        </div>
        <nav styleName="nav">
          {sections.map((section, i) =>
            <a href={section.selector} key={i} onClick={this.handleScroll} className={classNames({ [styles['selected']]: this.state.section === i })}>{section.title}</a>
          )}
        </nav>
        <div styleName="social">
          <a href="https://www.linkedin.com/in/loc-nguyen-00563761" title="LinkedIn" target="_blank">&#xe252;</a>
          <a href="https://github.com/loctn" title="GitHub" target="_blank">&#xe237;</a>
          <a styleName="leetcode" href="https://discuss.leetcode.com/user/loctn" title="LeetCode" target="_blank"><img src={require('./img/leetcode-black.png')} /></a>
        </div>
      </div>
    );
  }
}

export default CSSModules(Nav, styles);