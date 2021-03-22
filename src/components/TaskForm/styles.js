import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: ${({theme}) => theme.bgLight};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  label {
    border: 1px solid ${({theme}) => theme.fontColorLigth};
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    margin: 0 1rem;
  }
  input {
    color: ${({theme}) => theme.fontColorLigth};
    padding: 1rem;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
  }
`;