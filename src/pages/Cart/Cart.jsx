import React from 'react'
import { CartCard } from '../../components/CartCard/CartCard'
import { CartContainer, CartHeader, ContainerCart } from './Cart.styled'
import { useSelector, useDispatch } from 'react-redux'

// import carrinho, { resetarCarrinho } from '../../store/reducers/carrinho'
import carrinho from '../../store/reducers/carrinho'
import { resetarCarrinho } from '../../store/reducers/carrinho'

export const Cart = skin => {
  const dispatch = useDispatch()

  const { carrinho, total } = useSelector(state => {
    let total = 0
    const regexp = new RegExp(state.busca, 'i')
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id)
      total += item.preco * itemNoCarrinho.quantidade
      if (item.titulo.match(regexp)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade
        })
      }
      return itens
    }, [])

    return {
      carrinho: carrinhoReduce,
      total
    }
  })

  console.log(carrinho)
  return (
    <CartContainer>
      <CartHeader>Veja sua mercadoria escolhida</CartHeader>
      <ContainerCart>
        <h1 className="tituloCart">Resumo do Carrinho</h1>
        {carrinho.map(item => (
          <CartCard value={item} key={item.id} {...item} />
        ))}
        <div className="end">
          <div className="valorTotal">
            <h1>Subtotal:</h1>
            <h2 className="precoRp">2390 RP</h2>
          </div>
          <div>
            <button className="btnCart">Finalizar Compra</button>
          </div>
        </div>
      </ContainerCart>
    </CartContainer>
  )
}
