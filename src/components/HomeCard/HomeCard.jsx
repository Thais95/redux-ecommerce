import React from 'react';
import { CardContainer, CardTitle, HomeCardContainer } from './HomeCard.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HomeCard = () => {

  const categorias = useSelector(state => state.categorias)

  return (
    <>
      {categorias.map((el)=>(
        <HomeCardContainer key={el.id}>
          <Link to={`/categoria/${el.id}`}>
            <CardContainer>
              <img src={el.thumbnail} alt={el.nome} />
            </CardContainer>
            <CardTitle>
              {el.nome}
            </CardTitle>
          </Link>
        </HomeCardContainer>
      ))}
    
    </>
  )
}
