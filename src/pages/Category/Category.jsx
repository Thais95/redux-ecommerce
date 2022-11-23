import React, { useState } from 'react'
import { Banner } from '../../components/Banner/Banner.jsx'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard.jsx'
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle.jsx'
import { useSelector } from 'react-redux'
import { ContainerCategoryCard } from './Category.style.js'
import { useParams } from 'react-router-dom'
export const Category = () => {
  const {userName} = useParams()
  const categoria = useSelector(state => state.categorias)
  const [user, setUser] = useState()
  return (
    <>
      <Banner />
      {categoria.filter((item)=>{
        if(item.id === userName){
          return ''
        }
      })}

      <CategoryTitle titulo={user}/>
      <ContainerCategoryCard>
        <CategoryCard nomeSkin={userName}/>
      </ContainerCategoryCard>
    </>
  )
}
