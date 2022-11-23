import { ContainerCategoryTitle } from './CategoryTitle.style'

export const CategoryTitle = ({titulo,descricao}) => {
  return (
    <>
      <ContainerCategoryTitle>
        <div className="ContainerTitle">
            <h1>{titulo}</h1>
            <h2>tudo bem?</h2>
        </div>
      </ContainerCategoryTitle>
    </>
  )
}
