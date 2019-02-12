import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import theme from '../../utils/theme';
import { About, Contact, Skills } from '../index';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <About />
            <Skills />
            <Contact />
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
