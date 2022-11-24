import styled from 'styled-components'

export const ContainerComprovante = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  h1 {
    user-select: none;
    margin-bottom: 50px;
    font-size: 2.2rem;
    color: #078e4c;
  }
`

export const ResumoDaCompra = styled.div`
  width: 60vw;
  border-radius: 5px;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
  @media screen and (max-width: 1650px) {
      width: 82vw;
  }
  @media screen and (max-width: 1220px) {
      width: 90vw;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    h2 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 60px;
      user-select: none;
    }
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    width: 100%;
    display: flex;
    justify-content: end;
    user-select: none;
    margin-top: 30px;
    padding-bottom: 5px;
    span {
      font-weight: 700;
      color: #13a65e;
      padding-left: 10px;
    }
  }
  hr {
    border: 0;
    width: 98%;
    background-color:#000;
    height: 1px;
    margin-bottom: 30px;
    opacity: 0.2;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  img {
    width: 90px;
    height: 50px;
    object-fit: cover;
    object-position: top;
    border-radius: 0 0 4px 4px;
    -webkit-user-drag: none;
  }
  strong {
    font-weight: 600;
    font-size: 1.1rem;
    user-select: text;
    color: black;
  }
  p {
    color: #353535;
    user-select: none;
  }
  .skinNome {
    width: 350px;
  }
  .skinValor {
    width: 180px;
  }
  .skinQuant {
    width: 120px;
  }
  .skinTotal {
    width: 140px;
  }
`