// Button.stories.js | Button.stories.jsx

import React from 'react';

import Header from '../../components/atoms/Header.js';

export default {
  title: 'atoms/Header',
  component: Header,
};

export const Primary = () => <Header letters="Header" />;
