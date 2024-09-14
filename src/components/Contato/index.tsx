import { useDispatch } from "react-redux"
import { useState } from "react"
import { Contato as ContatoType } from "../../App"

import { removerContato } from "../../store/reducers/contatos"

import * as S from "./styles"

const Contato = ({nome, email, telefone, id}: ContatoType) => {
  const [estaEditanto, setEstaEditando] = useState(false)
  const dispatch = useDispatch()

  return (
    <S.Card>
      <div>
        <S.Legenda htmlFor="name">Nome: </S.Legenda>
        <S.Campo value={nome} type="text" id="name"/>
      </div>
      <div>
        <S.Legenda htmlFor="email">E-mail: </S.Legenda>
        <S.Campo value={email} type="e-mail" id="email"/>
      </div>
      <div>
        <S.Legenda htmlFor="phone">Telefone: </S.Legenda>
        <S.Campo value={telefone} type="tel" id="phone"/>
      </div>
      <S.BarraAcoes>
        {estaEditanto? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
          ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)} >Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(removerContato(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
          )
        }
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
