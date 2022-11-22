import React from 'react';
import { CardContainer, CardTitle, HomeCardContainer } from './HomeCard.styled';
import cardImg from '../../assets/card-ahri.png';

export const HomeCard = () => {
  return (
    <HomeCardContainer>
      <CardContainer>
        <img src={cardImg} alt="" />
      </CardContainer>
      <CardTitle>
        Título
      </CardTitle>
    </HomeCardContainer>
  )
}
