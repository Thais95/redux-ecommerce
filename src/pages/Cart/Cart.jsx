import React from 'react'
import { CartCard } from '../../components/CartCard/CartCard'
import { CartContainer, CartHeader, ContainerCart } from './Cart.styled'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Comprovante } from '../Comprovante/Comprovante'
import { Navigate } from 'react-router-dom'

// import carrinho, { resetarCarrinho } from '../../store/reducers/carrinho'
import carrinho from '../../store/reducers/carrinho'
import { resetarCarrinho } from '../../store/reducers/carrinho'

export const Cart = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

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

  return (
    <CartContainer>
      <CartHeader>Veja sua mercadoria escolhida</CartHeader>
      <ContainerCart>
        <h1 className="tituloCart">Carrinho</h1>
        {carrinho.map(item => (
          <CartCard value={item} key={item.id} {...item} carrinho />
        ))}
        <div className="end">
          <div className="valorTotal">
            <h1>Subtotal:</h1>
            <h2 className="precoRp">{total} <span>RP</span></h2>
          </div>
          <div>
            <button
              className="btnCart"
              onClick={() => {
                navigate('/comprovante', { state: { carrinho, total } })
                dispatch(resetarCarrinho())
              }}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </ContainerCart>
    </CartContainer>
  )
}
