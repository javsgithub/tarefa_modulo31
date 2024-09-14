import styled from "styled-components";
// import { Props } from ".";

import variaveis from "../../styles/variaveis";

export const Card = styled.div`
  width: 800px;
  border-radius: 8px;
  padding: 16px;
  margin: 16px auto;
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`
export const Legenda = styled.label`
  font-weight: bold;
  border-bottom: 8px;
`
export const Campo = styled.input`
  padding: 8px;
  // border-radius: 8px;
  width: 100%;
  display: inline-block;
  margin-bottom: 16px;
`
export const BarraAcoes = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Botao = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #2f3640;
  color: #fff;
  // margin-top: 16px;
  margin-right: 16px;
  font-weight: bold;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
  `
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
