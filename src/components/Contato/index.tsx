import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Contato as ContatoType } from "../../App"

import { removerContato, salvarContato } from "../../store/reducers/contatos"

import * as S from "./styles"

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: ContatoType) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState<string | number>("")
  const [telefone, setTelefone] = useState("")
  const [estaEditanto, setEstaEditando] = useState(false)

  useEffect(() => {
    if (nomeOriginal.length && emailOriginal.toString().length && telefoneOriginal.toString().length > 0) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal.toString())
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao () {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal.toString())
}

  return (
    <S.Card>
      <div>
        <S.Legenda htmlFor="name">Nome: </S.Legenda>
        <S.Campo disabled={!estaEditanto} value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" id="name"/>
      </div>
      <div>
        <S.Legenda htmlFor="email">E-mail: </S.Legenda>
        <S.Campo disabled={!estaEditanto} value={email} onChange={(evento) => setEmail(evento.target.value)} type="e-mail" id="email"/>
      </div>
      <div>
        <S.Legenda htmlFor="phone">Telefone: </S.Legenda>
        <S.Campo disabled={!estaEditanto} value={telefone} onChange={(evento) => setTelefone(evento.target.value)} type="tel" id="phone"/>
      </div>
      <S.BarraAcoes>
        {estaEditanto? (
          <>
            <S.BotaoSalvar onClick={() => {
              dispatch(
                salvarContato({
                  nome,
                  email,
                  telefone,
                  id
                })
              )
              setEstaEditando(false)
            }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
            onClick={cancelarEdicao}>
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
