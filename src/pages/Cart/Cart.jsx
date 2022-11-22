import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import { CartCard } from '../../components/CartCard/CartCard'
import { CartHeader, ContainerCart } from './Cart.styled'
export const Cart = () => {
  return (
    <>
    <Banner />
      <CartHeader>
        <h1>Carrinho de compras</h1>
        <h2>Confira as skills que você adicionou ao carrinho.</h2>
      </CartHeader>
    <ContainerCart>
      <CartCard value={100}/>

      <div className='end'>
            <div  className='valorTotal'>
              <h3>Resumo da compra</h3>
              <p>Subtotal <span>R$ 100</span></p>
            </div>

          </div>
          <div className='end'>
            <button>Finalizar Compra</button>
          </div>

    </ContainerCart>
    </>
  )
}
