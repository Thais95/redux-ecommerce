import React from 'react';
import { ContainerCard } from './CategoryCard.style';
// import LeeSin from '../../assets/lee-sin.jpg';
// import IconRP from '../../assets/icon-rp.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
// import { mudarFavorito } from '../../store/reducers/items';
// import { useDispatch, useSelector } from 'react-redux';
// import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/cart';

// const iconeProps = { size: 24, color: black }

// function item(props) { const {titulo, foto, preco, favorito, id, quantidade} = props }

// const dispatch = useDispatch
// const isInCart = useSelector(state => state.cart.some(itemInCart => itemInCart.id === id))

// function resolverFavorito() { dispatch(mudarFavorito(id)) }

// function resolverCarrinho() { dispatch(mudarCarrinho(id)) }

export const CategoryCard = ({nomeSkin,fotoSkin,preco}) => {
  return (
    <ContainerCard>
      <div className="ContainerImagem">
        <div>
          <img className="Imagem" src={fotoSkin} alt='' />
        </div>
        <p>
         {nomeSkin}
        </p>
        <div className="ContainerLowerCard">
          <div className="CardPrice">

            <i>

              <strong>RP: {preco}</strong>
            </i>
          </div>
          <div className="Heart">

            <i>

              <AiOutlineHeart />
              <FaCartPlus />
            </i>
          </div>
        </div>
      </div>
    </ContainerCard>
  )
}
