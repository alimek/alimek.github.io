import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  color: ${props => props.theme.defaultFontColor};
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const CompanyDetailsContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CompanyDetails = styled.span`
  color: ${props => props.theme.defaultFontColor};
  font-size: 0.6rem;
  text-align: center;

  a {
    color: ${props => props.theme.defaultFontColor};
    text-decoration: underline;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 1rem 0;
`;
