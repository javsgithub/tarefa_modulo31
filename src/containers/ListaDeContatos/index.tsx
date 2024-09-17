import { useSelector } from "react-redux"

import Contato from "../../components/Contato"
import * as S from "./styles"
import { SourceReducer } from "../../store"

const ListaDeContatos = () => {
  const {itens} = useSelector((state: SourceReducer) => state.contatos)

  return (
    <S.Container>
      <ul>
        <S.Titulo>Lista Empresarial de Contatos</S.Titulo>
        {itens.map(c =>
          <li key={c.nome}>
            <Contato
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
            />
          </li>)
        }
      </ul>
    </S.Container>
  )
}

export default ListaDeContatos
