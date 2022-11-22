import React from 'react'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard.jsx'

import { Footer } from '../../components/Footer/Footer'
import { ContainerCategoryCard } from './Category.style.js'

export const Category = () => {
  return (
    <>
      <ContainerCategoryCard>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </ContainerCategoryCard>
      <Footer />
    </>
  )
}
