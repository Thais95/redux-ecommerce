import styled from 'styled-components'

export const ContainerCart = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 200px;
  .end {
    display: flex;
    justify-content: flex-end;
    margin: 20px 190px 0px 0px;
    .valorTotal {
      display: flex;
      padding: 15px 20px;
      align-items: center;
      justify-content: space-between;
      background-color: #c4c3c3;
      border-radius: 10px;
      width: 600px;
    }

    button {
      display: flex;
      justify-content: center;
      border: none;
      background-color: #4c4574;
      color: white;
      font-size: 1.5rem;
      padding: 15px 20px;
      border-radius: 30px;
      cursor: pointer;
      width: 220px;
      white-space: nowrap;
      align-items: center;
    }
  }
`

export const CartHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin: -350px 0px 350px 0px;
  color: white;
  gap: 20px;
  flex-direction: column;
  h1 {
    font-size: 3.5rem;
  }
`
