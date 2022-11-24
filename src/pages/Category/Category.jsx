import React from 'react'
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle.jsx'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard.jsx'
import { useSelector } from 'react-redux'
import { CategoryContainer, ContainerCategoryCard } from './Category.style.js'
import { useParams } from 'react-router-dom'
import { mudarFavorito } from '../../store/reducers/items'
import { useDispatch } from 'react-redux'
import { Navbar } from '../../components/Navbar/Navbar.jsx'

export const Category = () => {
  const { userName } = useParams()
  const categoria = useSelector(state => state.categorias)
  const skins = useSelector(state => state.itens)
  const dispatch = useDispatch()

  const item = categoria.filter(i => {
    return i.id === userName
  })

  const skin = skins.filter(skin => {
    return skin.categoria === userName
  })

  // const { categories, items } = useSelector(state => {
  //   const regexp = new RegExp(state.busca, 'i')
  //   return {
  //     categories: state.categoria.find(categoria => categoria.id === userName),
  //     items: items.filter(
  //       item => items.categoria === userName && item.titulo.match(regexp)
  //     )
  //   }
  // })

  return (
    <>
      {item.map(item => {
        return (
          <CategoryContainer
            key={item.id}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            {' '}
            <CategoryTitle tituloDescricao={item} />
            <ContainerCategoryCard>
              {skin.map(skin => {
                return (
                  <CategoryCard
                    key={skin.id}
                    onClick={() => dispatch(mudarFavorito(skin.id))}
                    skin={skin}
                  />
                )
              })}
            </ContainerCategoryCard>
          </CategoryContainer>
        )
      })}
    </>
  )
}
