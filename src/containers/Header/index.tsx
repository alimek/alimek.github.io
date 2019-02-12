import * as React from 'react';

import { Container } from './styles';
import { Menu, MenuLink } from '../../components';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Menu>
          <MenuLink label="about" link="/" />
          <MenuLink label="Skills" link="/skills" />
          <MenuLink label="Contact" link="/contact" />
        </Menu>
      </Container>
    );
  }
}

export default Header;
