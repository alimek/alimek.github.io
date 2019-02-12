import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Verdana",serif;
  }

  body {
    display: flex;
    background-color: rgba(183,200,229,0.12);
    justify-content: space-around;
  }

  #root {
     @media screen and (min-width: 800px) {
      max-width: 1000px;
     }
  }

  h1,h2,h3,h4,h5 {
    margin: 0;
  }
`;

ReactDOM.render((
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
