import React from 'react'
import { CartCard } from '../../components/CartCard/CartCard'
import { ContainerCart } from './Cart.styled'
export const Cart = () => {
  return (
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
  )
}
