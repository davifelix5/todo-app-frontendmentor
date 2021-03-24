import styled from 'styled-components';

export const HeaderArea = styled.header`
  width: 555px;
  padding: 0 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 560px) {
    width: 95%;
  } 
`;

HeaderArea.TitleArea  = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem 0 3rem 0;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.8rem;
    text-transform: uppercase;
  }
`;