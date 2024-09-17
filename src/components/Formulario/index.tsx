import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { SourceReducer } from "../../store"
import * as S from "./styles"
import { criarContato } from "../../store/reducers/contatos"

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  const {itens} = useSelector((state: SourceReducer) => state.contatos)

  function cadastrarContato (evento: FormEvent) {
    evento.preventDefault()
    const contatosParaCadastrar = {
      nome,
      email,
      telefone,
      id: 4
    }
    dispatch(criarContato(contatosParaCadastrar))
  }

  return (
    <S.Form onSubmit={cadastrarContato}>
      <div>
        <S.Legenda htmlFor="name">Nome Completo: </S.Legenda>
        <S.Campo required value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        id="name"
        placeholder="Ex: José Inácio Lula da Silva"/>
      </div>
      <div>
        <S.Legenda htmlFor="email">E-mail: </S.Legenda>
        <S.Campo required value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="e-mail"
        id="email"
        placeholder="Ex: joana@yahoo.com.br"
        />
      </div>
      <div>
        <S.Legenda htmlFor="phone">Telefone com DDD: </S.Legenda>
        <S.Campo required value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        type="tel"
        id="phone"
        placeholder="Ex: (xx) 99999-9999"
        />
      </div>
      <div>
        <S.Botao>Adicionar</S.Botao>
      </div>
    </S.Form>
  )
}

export default Formulario
