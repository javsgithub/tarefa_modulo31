import styled from "styled-components";

import variaveis from "../../styles/variaveis";

export const Form = styled.form`

`
export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: none;
  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
`

export const Legenda = styled.label`
  font-weight: bold;
  color: #eee;
  margin-bottom: 16px;
  display: block;
`
export const Botao = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${variaveis.verde};
  color: #fff;
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`
