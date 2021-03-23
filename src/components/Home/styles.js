import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${( { theme } ) => theme.bgColor};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;