import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contato } from "../../App";

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: "Carlos Alberto Nascimento",
      email: "nascimento@yahoo.com.br",
      telefone: 71992909290,
      id: 1
    },
    {
      nome: "Janaina Ribeiro da Silva",
      email: "Ribeiro@yahoo.com.br",
      telefone: 71992909290,
      id: 2
    },
    {
      nome: "Joaquina Costa do Santos",
      email: "JoaquinaC@hotmail.com",
      telefone: 71992909290,
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const {removerContato} = contatosSlice.actions
export default contatosSlice.reducer
