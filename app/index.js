require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import { render } from 'react-dom';

import Portfolio from './components';

const parentElement = document.body;
const firstChild = parentElement.firstChild;
const componentContainer = document.createElement('div');
componentContainer.id = 'root';

if (firstChild) {
  parentElement.insertBefore(componentContainer, firstChild);
} else {
  parentElement.appendChild(componentContainer);
}

render(
  <Portfolio />,
  componentContainer
);