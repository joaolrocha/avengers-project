// src/views/Login/Login.styles.ts
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  /* flex: 1; */
  width: 50%;
  /* background-size: cover; */

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;

  & h1 {
    color: #ff0000;
  }

  & p {
    color: #84848D;
  }
`;

export const Input = styled.input`

  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
