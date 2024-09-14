import { Provider } from "react-redux";
import BarraLateral from "./containers/BarraLateral";
import ListaDeContatos from "./containers/ListaDeContatos";
import EstiloGlobal, { Container } from "./styles";
import store from "./store";

export type Contato = {
  nome: string
  email: string | number
  telefone: number | string
  id: number
}

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  );
}

export default App;
