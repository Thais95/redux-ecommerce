import React from 'react';
import { CartCard } from '../../components/CartCard/CartCard';
import { CartContainer, CartHeader, ContainerCart } from './Cart.styled';

export const Cart = () => {
  return (
    <CartContainer>
      <CartHeader>
      </CartHeader>
      <ContainerCart>
        <h1 className='tituloCart'>Resumo do Carrinho</h1>
        <CartCard value={100} />
        <div className='end'>
          <div className='valorTotal'>
            <h1>Subtotal:</h1>
            <h2 className='precoRp'>2390 RP</h2>
          </div>
          <div>
           <button className='btnCart'>Finalizar Compra</button>
          </div>
        </div>
      </ContainerCart>
    </CartContainer>
  )
}
