import React from 'react'
import LeeSin from '../../assets/lee-sin.jpg'
import { ContainerCategoryTitle } from './CategoryTitle.style'

export const CategoryTitle = () => {
  return (
    <>
      <ContainerCategoryTitle>
        <div className="ContainerTitle">
          <h1>Lee sin</h1>
          <h2>Sua vontade, minhas mãos</h2>
        </div>
        <div className="ContainerImagem">
          {' '}
          <img src={LeeSin} />
        </div>
      </ContainerCategoryTitle>
    </>
  )
}
