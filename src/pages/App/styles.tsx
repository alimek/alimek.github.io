import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.contentBackgroundColor};
  flex-direction: column;
  box-shadow: ${props => props.theme.contentBackgroundColor} 0 0 5rem;

  @media screen and (min-width: 800px) {
    margin: 2rem 0;
    border: 10px solid ${props => props.theme.borderColor};
    border-radius: 4px;
  }
`;
