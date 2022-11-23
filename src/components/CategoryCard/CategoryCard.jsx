import React from 'react'
import { ContainerCard } from './CategoryCard.style'
import { FaRegHeart, FaHeart, FaCartPlus } from 'react-icons/fa'

export const CategoryCard = ({ skin, onClick }) => {
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
                    <FaHeart />
                  </span>
                ) : (
                  <span onClick={onClick}>
                    <FaRegHeart />
                  </span>
                )}
              </i>
              <div>
                <strong>RP: {skin.preco}</strong>
              </div>
              <i>
                <FaCartPlus />
              </i>
            </div>
          </div>
        </div>
      </div>
    </ContainerCard>
  )
}
