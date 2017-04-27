import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './css/avatar.css';

const Avatar = ({ styles }) => (
  <div styleName="component">

  </div>
);

Avatar.propTypes = {
  styles: PropTypes.object
};

export default CSSModules(Avatar, styles);