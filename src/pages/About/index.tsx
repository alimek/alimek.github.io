import * as React from 'react';

import { Container, Description, Name, WelcomeText, ImageContainer, AboutContainer, Location } from './styles';
import { Avatar, Page } from '../../components';

const avatar = require('../../assets/avatar.jpg');

interface IAboutPropTypes {

}

class About extends React.Component<IAboutPropTypes> {
  render() {
    return (
      <Page name="about">
        <Container>
          <AboutContainer>
            <WelcomeText>Hi There, I am</WelcomeText>
            <Name>Grzegorz Mandziak</Name>
            <Description>Full-stack developer</Description>
            <Location>Currently based in Wrocław, Poland</Location>
          </AboutContainer>
          <ImageContainer>
            <Avatar url={avatar} size={20}/>
          </ImageContainer>
        </Container>
      </Page>
    );
  }
}

export default About;
