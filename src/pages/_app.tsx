/* eslint-disable global-require */
import '../styles/global.css';

import { useEffect } from 'react';

const React = require('react');
const ReactDOM = require('react-dom');

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const axe = require('@axe-core/react');
      axe(React, ReactDOM, 1000);
    }
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp;
