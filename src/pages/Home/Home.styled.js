import styled from 'styled-components';
import homeBg from '../../assets/banner.png';

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  justify-content: end;
  background-image: url(${homeBg});
  background-size: cover;
`

export const HomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: black;
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`
