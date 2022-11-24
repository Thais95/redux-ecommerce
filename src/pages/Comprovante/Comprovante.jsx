import React from 'react'
import { ContainerComprovante, Item, ResumoDaCompra } from './Comprovante.style'
import { useLocation } from 'react-router-dom'

export const Comprovante = () => {
  const { state } = useLocation();

  return (
    <>
      <ContainerComprovante>
        <h1>Agradecemos pela sua compra!</h1>
        <ResumoDaCompra>
          <header>
            <h2>Resumo do Carrinho</h2>
          </header>
          {state.carrinho.map(item => (
            <>
              <Item key={item.id}>
                <img src={item.foto} alt="Imagem da Skin" />
                <p className='skinNome'>Nome da Skin: <strong>{item.titulo}</strong></p>
                <p className='skinValor'>Valor unitário: <strong>{item.preco} RP</strong></p>
                <p className='skinQuant'>Quantidade: <strong>{item.quantidade}</strong></p>
                <p className='skinTotal'>Valor total: <strong>{item.preco * item.quantidade}</strong></p>
              </Item>
              <hr />
            </>
          ))}
          <h3>Valor total da compra: <span> {state.total} RP</span></h3>
        </ResumoDaCompra>
      </ContainerComprovante>
    </>
  )
}
