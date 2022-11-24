import React from 'react'
import { ContainerComprovante } from './Comprovante.style'
import { useLocation } from 'react-router-dom'

export const Comprovante = () => {
  const { state } = useLocation();

  return (
    <>
      <ContainerComprovante>
        <div className="ContainerConteudo">
          <h1>Recibo de compras:</h1>
          {state.carrinho.map(item => (
            <>
            <h1>{item.titulo}</h1>
            <img src={item.foto} alt="Foto da Skin" />
            <p>{item.preco}</p>
            <p>{item.quantidade}</p>
            <p>{item.preco * item.quantidade}</p> 
            </>
          ))}
          <h1>Total: {state.total}</h1>
        </div>
      </ContainerComprovante>
    </>
  )
}
