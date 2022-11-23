import { ContainerCategoryTitle } from './CategoryTitle.style'

export const CategoryTitle = ({ tituloDescricao }) => {
  return (
    <>
      <div style={'background: url({tituloDescricao.background})'}>
        <ContainerCategoryTitle>
          <div className="ContainerTitle">
            <h1>{tituloDescricao.nome}</h1>
            <h2>{tituloDescricao.description}</h2>
          </div>
        </ContainerCategoryTitle>
      </div>
    </>
  )
}
