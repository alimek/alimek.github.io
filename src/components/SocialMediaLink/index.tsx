import * as React from 'react';

import { Container, Image } from './styles';

interface ISocialMedialLinkPropTypes {
  url: string;
  name: string;
  imageUrl: string;
}

class SocialMedialLink extends React.PureComponent<ISocialMedialLinkPropTypes> {
  render() {
    const { url, imageUrl } = this.props;

    return (
      <Container href={url}>
        <Image src={imageUrl} />
      </Container>
    );
  }
}

export default SocialMedialLink;
