import styled from 'styled-components';

const ratio = 1;

export const Container = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContainer = styled.div`
  color: ${props => props.theme.defaultFontColor};
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const WelcomeText = styled.h3`
  font-size: ${ratio}rem;
`;

export const Location = styled.span`
  font-size: ${ratio * 0.8}rem;
  margin-top: 1rem;
`;

export const Name = styled.h1`
  font-size: ${ratio * 4}rem;
`;

export const Description = styled.h2`
  font-size: ${ratio * 1.5}rem;
`;
