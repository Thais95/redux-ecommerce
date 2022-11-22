import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 5;
  color: black;
  margin-top: -500px;
  margin-bottom: 150px;
  header {
    width: 550px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1 {
      color: var(--detail-color);
      font-size: 3.8rem;
      font-weight: 700;
      -webkit-text-stroke: 2px black;
      user-select: none;
      text-align: center;
      text-shadow: 2px 2px 5px var(--secondary-detail-color);
    }
    h2 {
      color: black;
      font-size: 1.8rem;
      font-weight: 700;
      user-select: none;
      text-align: center;
      text-shadow: 1px 2px 1px var(--detail-color);
    }
  }
  img {
    width: 500px;
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`
