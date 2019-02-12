import * as React from 'react';

import { Container, Header, LinksContainer, CompanyDetails, CompanyDetailsContainer } from './styles';
import { Page } from '../../components';
import SocialMedialLink from '../../components/SocialMediaLink';

const githubLogo = require('../../assets/github.png');
const linkedInLogo = require('../../assets/linkedin.png');
const twitterLogo = require('../../assets/twitter.jpg');

class Contact extends React.Component {
  render() {
    return (
      <Page name="contact">
        <Container>
          <Header>Contact details</Header>
          <LinksContainer>
            <SocialMedialLink
              name="GitHub"
              imageUrl={githubLogo}
              url="https://github.com/alimek"
            />
            <SocialMedialLink
              name="LinkedIn"
              imageUrl={linkedInLogo}
              url="https://www.linkedin.com/in/gmandziak"
            />
            <SocialMedialLink
              name="Twitter"
              imageUrl={twitterLogo}
              url="https://twitter.com/alimek_"
            />
          </LinksContainer>
          <CompanyDetailsContainer>
            <CompanyDetails>Usługi informatyczne Grzegorz Mandziak</CompanyDetails>
            <CompanyDetails>e-mail: <a href="mailto:info@alimek.pl">info@alimek.pl</a></CompanyDetails>
            <CompanyDetails>NIP ID: 612-182-01-94</CompanyDetails>
          </CompanyDetailsContainer>
        </Container>
      </Page>
    );
  }
}

export default Contact;
