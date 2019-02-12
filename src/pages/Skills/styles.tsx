import styled from 'styled-components';

export const Container = styled.div`
  display: inline;
`;

export const Description = styled.span`
  color: ${props => props.theme.defaultFontColor};
  display: inline;
  margin-bottom: 1rem;
`;

export const Header = styled.header`
  color: ${props => props.theme.defaultFontColor};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;
