import React from 'react';
import { ContainerCard } from './CategoryCard.style';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { mudarFavorito } from '../../store/reducers/items';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/cart';

// const iconeProps = { size: 24, color: black }

// function item(props) { const {titulo, foto, preco, favorito, id, quantidade} = props }

const dispatch = useDispatch
// const isInCart = useSelector(state => state.cart.some(itemInCart => itemInCart.id === id))

// function resolverFavorito() { dispatch(mudarFavorito(id)) }

// function resolverCarrinho() { dispatch(mudarCarrinho(id)) }

export const CategoryCard = ({skin}) => {
  return (
    <ContainerCard>
      <div className="ContainerImagem">
        <div>
          <img className="Imagem" src={skin.foto} alt='' />
        </div>
        <p>
         {skin.titulo}
        </p>
        <div className="ContainerLowerCard">
          <div className="CardPrice">

            <i>

              <strong>RP: {skin.preco}</strong>
            </i>
          </div>
          <div className="Heart">

            <i>
              <AiOutlineHeart/>
              <FaCartPlus />
            </i>
          </div>
        </div>
      </div>
    </ContainerCard>
  )
}
