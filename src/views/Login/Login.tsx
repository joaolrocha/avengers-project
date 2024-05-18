// src/views/Login/Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoMarvel from '../../components/common/LogoMarvel/LogoMarvel';
import Layout from '../../components/common/Layout/Layout';
import {
  Button,
  Form,
  FormContainer,
  FormTitle,
  Input,
  Register
} from './Login.styles';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   navigate('/home');
  };

  return (
    <Layout>
      <FormContainer>
        <LogoMarvel />
        <Form onSubmit={handleSubmit}>
          <FormTitle>
            <h1>Bem-vindo(a) de volta!</h1>
            <p>Acesse sua conta:</p>
          </FormTitle>
          <Input type="text" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
        </Form>
        <Register>
          <p>Ainda não tem o login? <span>Cadastre-se</span></p>
        </Register>
      </FormContainer>
    </Layout>
  );
};

export default Login;
