/* eslint-disable */

import React from 'react';
import Resizable from '../../src';
import style from './default-style';

export default () => (
  <Resizable
    style={style}
    defaultSize={{
      width: 200,
      height: 200,
    }}
    minWidth="10%"
    minHeight="50%"
  >
    001
  </Resizable>
);
