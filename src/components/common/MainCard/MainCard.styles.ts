import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const CardName = styled.h2`
  margin: 10px 0;
  font-family: 'Kastelov - Axiforma', Arial, sans-serif;
  color: #FFF;
  font-size: 20px;
`;

 export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 1), rgba(64, 14, 14, 0.5));
  /* padding: 20px; */
  border-radius: 10px;
  margin-top: 10px;
  height: 235px;
  width: 290px;
  box-sizing: border-box;
`;

export const CardDescription = styled.p`
  font-family: 'Kastelov - Axiforma Thin', Arial, sans-serif;
  color: #FFF;
  font-size: 12px;
  height: 130px;
`;

export const ButtonDetails = styled.div `
    font-family: 'Kastelov - Axiforma Thin', Arial, sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #FFF;
    cursor: pointer;
`