import React from 'react';
import { ContainerCard } from './CategoryCard.style';
import { FaRegHeart, FaHeart, FaCartPlus } from 'react-icons/fa';

export const CategoryCard = ({skin, onClick}) => {
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
              {skin.favorito ? <span onClick={onClick}><FaHeart /></span> : <span onClick={onClick}><FaRegHeart /></span>}
            <i>
              <FaCartPlus />
            </i>
          </div>
        </div>
      </div>
    </ContainerCard>
  )
}
