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
    },
    salvarContato: (state, action: PayloadAction<Contato>) => {
      const aSubstituir = state.itens.find((contato) => contato.id === action.payload.id)

      if (aSubstituir) {
        const indiceAlvo = state.itens.indexOf(aSubstituir)
        state.itens.splice(indiceAlvo, 1, action.payload)
      }
    },
    criarContato: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const constatoJaExiste = state.itens.find(
        (contato) => contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (constatoJaExiste) {
        alert("Já existe um contato com esse nome!")
      } else {
        const ultimoContato = state.itens[state.itens.length-1]
          const novoContato = {
            ...action.payload,
            id: ultimoContato? ultimoContato.id + 1: 1}
            state.itens.push(novoContato)
          }
    }
  }
})

export const {removerContato, salvarContato, criarContato} = contatosSlice.actions
export default contatosSlice.reducer
