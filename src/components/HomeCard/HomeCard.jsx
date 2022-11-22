import React from 'react';
import { CardContainer, CardTitle, HomeCardContainer } from './HomeCard.styled';
import cardImg from '../../assets/card-ahri.png';
import { Link } from 'react-router-dom';

export const HomeCard = () => {
  return (
    <HomeCardContainer>
      <Link to={'/categoria'}>
        <CardContainer>
          <img src={cardImg} alt="" />
        </CardContainer>
        <CardTitle>
          Título
        </CardTitle>
      </Link>
    </HomeCardContainer>
  )
}
