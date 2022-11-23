import React from 'react';
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle.jsx';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard.jsx';
import { useSelector } from 'react-redux';
import { CategoryContainer, ContainerCategoryCard } from './Category.style.js';
import { useParams } from 'react-router-dom';
import { mudarFavorito } from '../../store/reducers/items';
import { useDispatch } from 'react-redux';

export const Category = () => {
  const { userName } = useParams();
  const categoria = useSelector(state => state.categorias);
  const dispatch = useDispatch();
  const {itens} = useSelector(states =>{
    const regexp = new RegExp(states.busca, 'i')
    return{
      itens: states.itens.filter( item => item.categoria === userName && item.titulo.match(regexp)),
    }
  }) 
  
  const item = categoria.filter((i) => {
    return i.id === userName
  })

  return (
    <>    
      {item.map((item) => {
        return <CategoryContainer key={item.id} style={{backgroundImage: `url(${item.background})`}}> <CategoryTitle tituloDescricao={item} />

      <ContainerCategoryCard>
        {itens.map((skin) => {
          return <CategoryCard key={skin.id} {...skin} onClick={() => dispatch(mudarFavorito(skin.id))} skin={skin} />
        })}
      </ContainerCategoryCard>
    </CategoryContainer>
    })}
    </>
  )
}
