import * as React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
}

class Page extends React.PureComponent<Props> {
  render() {
    return (
      <Container id={this.props.name} >
        {this.props.children}
      </Container>
    );
  }
}

export default Page;
