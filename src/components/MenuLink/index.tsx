import * as React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface IMenuItemPropTypes {
  label: string;
  link: string;
}

class MenuItem extends React.PureComponent<IMenuItemPropTypes> {
  render() {
    const { link, label } = this.props;

    return (
      <Container>
        <Link to={link}>{label}</Link>
      </Container>
    );
  }
}

export default MenuItem;
