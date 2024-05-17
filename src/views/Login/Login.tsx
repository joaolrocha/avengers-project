// src/views/Login/Login.tsx
import React from 'react';
import avengersImage from '../../assets/images/avengers1.jpeg';
import {
  Button,
  Form,
  FormContainer,
  ImageContainer,
  Input,
  LoginContainer
} from './Login.styles';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Form>
          <h1>Bem-vindo(a) de volta!</h1>
          <p>Acesse sua conta:</p>
          <Input type="text" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">Login</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <img src={avengersImage} alt="Login" />
      </ImageContainer>
    </LoginContainer>
  );
};

export default Login;
