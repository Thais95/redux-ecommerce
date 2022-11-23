import styled from 'styled-components'

export const CategoryContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background-color: black;
    height: 500px;
    width: 100%;
    top: 0;
    opacity: 0.2;
  }
`

export const ContainerCategoryCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`
