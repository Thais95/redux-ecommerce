import React from 'react'
import { ContainerComprovante } from './Comprovante.style'
import { useLocation } from 'react-router-dom'

export const Comprovante = () => {
  const { state } = useLocation()
  console.log(state)

  return (
    <>
      <ContainerComprovante>
        <div className="ContainerConteudo">
          <h1>Recibo de compras:</h1>
          {state.map(item => (
            <h1>{item.preco}</h1>
          ))}
          <h1>{state.preco}</h1>

          <p></p>
          <p>Valor</p>
        </div>
      </ContainerComprovante>
    </>
  )
}
