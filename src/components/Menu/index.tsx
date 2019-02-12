import * as React from 'react';

import { Container } from './styles';

class Menu extends React.PureComponent {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}

export default Menu;
