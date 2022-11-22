import React from 'react'
import { ContainerCard } from './CategoryCard.style'
import LeeSin from '../../assets/lee-sin.jpg'
import IconRP from '../../assets/icon-rp.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'

export const CategoryCard = () => {
  return (
    <ContainerCard>
      <div className="ContainerImagem">
        <div>
          <img className="Imagem" src={LeeSin} />
        </div>
        <h3>Lee sin</h3>
        <p>
          A master of Ionia's ancient martial arts, Lee Sin is a principled
          fighter who channels the essence of the dragon spirit to face any
          challenge.
        </p>
        <div className="ContainerLowerCard">
          <div className="CardPrice">
            {' '}
            <i>
              {' '}
              <strong>RP: 875</strong>
              <img src={IconRP} alt="" />
            </i>
          </div>
          <div className="Heart">
            {' '}
            <i>
              {' '}
              <AiOutlineHeart />
              <FaCartPlus />
            </i>
          </div>
        </div>
      </div>
    </ContainerCard>
  )
}
