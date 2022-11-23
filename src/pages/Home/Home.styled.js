import styled from 'styled-components'
import homeBg from '../../assets/banner.png'

export const HomeContainer = styled.div`
  width: 100vw;
`

export const BackgroundContainer = styled.div`
  background-image: url(${homeBg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const HomeHeader = styled.header`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: black;
  margin-left: 200px;
    h1 {
      color: white;
      font-size: 3.8rem;
      font-weight: 700;
      user-select: none;
      text-align: center;
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.90);
    }
    h2 {
      color: white;
      font-size: 1.5rem;
      font-weight: 400;
      user-select: none;
      text-align: center;
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.90);
    }
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  overflow-x: visible;
`
