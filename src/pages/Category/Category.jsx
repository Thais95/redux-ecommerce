import React from 'react'
import { Banner } from '../../components/Banner/Banner.jsx'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard.jsx'
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle.jsx'

import { Footer } from '../../components/Footer/Footer'
import { ContainerCategoryCard } from './Category.style.js'

export const Category = () => {
  return (
    <>
      <Banner />
      <CategoryTitle />
      <ContainerCategoryCard>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </ContainerCategoryCard>
    </>
  )
}
