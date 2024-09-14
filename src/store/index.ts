import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "./reducers/contatos";

const store = configureStore({
  reducer:{
    contatos: contatosReducer
  }
})

export type SourceReducer = ReturnType<typeof store.getState>
export default store
