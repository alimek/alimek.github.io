import * as React from 'react';

import { Description, Header } from './styles';
import { Page } from '../../components';

interface ISkillsPropTypes {

}

class Skills extends React.Component<ISkillsPropTypes> {
  render() {
    return (
      <Page name="skills">
        <Header>My experience</Header>
        <Description>
          Employed as developer since 2013. PHP developer with front-end skills.
          React.JS fan. Currently mainly focused on JavaScript language and creating native mobile apps using ReactNative framework.
        </Description>
        <Description>
          In my whole carrier I used languages mainly PHP and JavaScript (with Flow or TypeScript). While developing mobile apps I also used Java and Objective-C for small changes on native side for ReactNative.
        </Description>
        <Description>
          I used frameworks: Symfony 2/3, ExpressJS, AngularJS, ReactJS, ReactNative.
        </Description>
        <Description>
          As cloud platform I am familiar with some of AWS services and creating infrastructure as code using Terraform.
        </Description>
      </Page>
    );
  }
}

export default Skills;
