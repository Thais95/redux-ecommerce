import React, { useState } from 'react'
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle.jsx'
import { Banner } from '../../components/Banner/Banner.jsx'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard.jsx'
import { useSelector } from 'react-redux'
import { ContainerCategoryCard } from './Category.style.js'
import { useParams } from 'react-router-dom'
export const Category = () => {
  const {userName} = useParams()
  const categoria = useSelector(state => state.categorias)
  const skins = useSelector(state => state.itens)
  
  const item = categoria.filter((i)=>{
    return i.id === userName
  })

  const skin = skins.filter((skin)=>{
    return skin.categoria === userName
  })

  console.log(skin)

  return (
    <>
      <Banner />
      {item.map((item)=>{
        return <CategoryTitle tituloDescricao={item}/>
      })}

      <ContainerCategoryCard>
        {skin.map((skin)=>{
          return <CategoryCard skin={skin}/>
        })}
      </ContainerCategoryCard>
    </>
  )
}
