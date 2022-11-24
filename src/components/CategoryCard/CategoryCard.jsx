import React from 'react';
import { ContainerCard } from './CategoryCard.style';
import { FaRegHeart, FaHeart, FaCartPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { mudarCarrinho } from '../../store/reducers/carrinho';

export const CategoryCard = ({ skin, onClick }) => {
  const dispatch = useDispatch()
  const estaNoCarrinho = useSelector(state =>
    state.carrinho.some(item => item.id === skin.id)
  )

  const carrinho = useSelector(state => state.carrinho)

  // function removerCarrinho() {
  //   dispatch(mudarCarrinho(skin.id))
  // }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(skin.id))
  }

  return (
    <ContainerCard>
      <div className="ContainerImagem">
        <div>
          <img className="Imagem" src={skin.foto} alt="" />
          <div className="Heart">
            <div>
              <p>{skin.titulo}</p>
            </div>
            <div className="ContainerLowerCard">
              <i>
                {skin.favorito ? (
                  <span onClick={onClick}>
                    <FaHeart className="fotoCoracao" />
                  </span>
                ) : (
                  <span onClick={onClick}>
                    <IconContext.Provider value={{ color: '#bfbfbf' }}>
                      <FaRegHeart className="icon" />
                    </IconContext.Provider>
                  </span>
                )}
              </i>
              <div>
                <strong>RP: {skin.preco}</strong>
              </div>
              <i>
                <IconContext.Provider value={{ color: '#bfbfbf' }}>
                  <FaCartPlus className="icon" onClick={resolverCarrinho} />
                </IconContext.Provider>
              </i>
            </div>
          </div>
        </div>
      </div>
    </ContainerCard>
  )
}
