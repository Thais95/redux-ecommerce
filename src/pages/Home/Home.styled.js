import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
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

export const HomeHeader = styled.header`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: black;
  margin-left: 200px;
  padding-bottom: 50px;
  z-index: 2;
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
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  overflow-x: visible;
  z-index: 2;
`
