import * as S from "./styles"

const Formulario = () => (
  <S.Form>
    <div>
      <S.Legenda htmlFor="name">Nome: </S.Legenda>
      <S.Campo type="text" id="name"/>
    </div>
    <div>
      <S.Legenda htmlFor="email">E-mail: </S.Legenda>
      <S.Campo type="e-mail" id="email"/>
    </div>
    <div>
      <S.Legenda htmlFor="phone">Telefone: </S.Legenda>
      <S.Campo type="tel" id="phone"/>
    </div>
    <div>
      <S.Botao>adicionar</S.Botao>
    </div>
  </S.Form>
)

export default Formulario
