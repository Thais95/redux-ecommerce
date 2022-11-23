import styled from 'styled-components'

export const ContainerCategoryTitle = styled.div`
  display: flex;
  gap: 40px;
  width: 650px;
  color: #fff;
  height: 400px;
  align-items: center;
  .ContainerTitle {
    margin-left: 200px;
    z-index: 3;
    text-align: center;
    user-select: none;
    h1 {
      color: white;
      font-size: 3.5rem;
      font-weight: 700;
      user-select: none;
      text-align: center;
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.90);
    }
    h2 {
      color: white;
      font-size: 1.4rem;
      font-weight: 400;
      user-select: none;
      text-align: center;
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.90);
    }
  }
  img {
    border-radius: 30px;
    width: 250px;
  }
`
