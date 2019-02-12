import * as React from 'react';

import { Container } from './styles';

interface IAvatarPropTypes {
  url: string;
  size: number;
}

class Avatar extends React.PureComponent<IAvatarPropTypes> {
  render() {
    return (
      <Container size={this.props.size} src={this.props.url} />
    );
  }
}

export default Avatar;
