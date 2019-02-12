import styled from 'styled-components';

export const Container = styled.img<{ size: number }>`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: ${props => props.size / 2}rem;
  border: 4px solid ${props => props.theme.borderColor};
  box-shadow: rgba(255, 255, 255, 0.3) 0 0 30px;
  margin: 1rem 0;
`;
