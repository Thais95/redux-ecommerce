import styled from 'styled-components'

export const ContainerCategoryTitle = styled.div`
  display: flex;

  gap: 40px;
  width: 650px;
  color: #fff;
  height: 400px;

  align-items: center;

  .ContainerTitle {
    padding-left: 20%;
    h1 {
      font-size: 3rem;
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.9);
    }

    h2 {
      font-size: 1.5rem;
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.9);
    }
  }

  img {
    border-radius: 30px;
    width: 250px;
  }
`
