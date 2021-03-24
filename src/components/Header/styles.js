import styled from 'styled-components';

export const HeaderArea = styled.header`
  width: 50%;
  padding: 0 3rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

HeaderArea.TitleArea  = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0 2rem 0;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 2.3rem;
    letter-spacing: 0.8rem;
    text-transform: uppercase;
  }
`;