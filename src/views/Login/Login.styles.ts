// src/views/Login/Login.styles.ts
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding-top: 90px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;

  & h1 {
    color: #ff0000;
    font-family: 'Kastelov - Axiforma', Arial, sans-serif;
  }

  & p {
    color: #84848D;
    font-family: 'Kastelov - Axiforma', Arial, sans-serif;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 380px;
  height: 70px;
  border-radius: 40px;
  font-family: 'Kastelov - Axiforma', Arial, sans-serif;
  font-size: 22px;
  padding-left: 2rem;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  width: 380px;
  height: 70px;
  font-size: 28px;
  font-family: 'Kastelov - Axiforma', Arial, sans-serif;
  &:hover {
    background-color: #0056b3;
  }
`;

export const FormTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.3rem;
`;

export const Register = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.875rem;

  & p {
    color: #84848D;
    font-size: 1rem;
    font-family: 'Kastelov - Axiforma', Arial, sans-serif;

    & span {
      color: #ff0000;
    }
  }
`;
