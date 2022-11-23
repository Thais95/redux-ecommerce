import styled from 'styled-components'
import BgCart from '../../assets/shop.jpg'

export const CartContainer = styled.div`
  background-image: url(${BgCart});
  height: 100vh;
  background-size: cover;
  background-position: top;
` 

export const ContainerCart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  align-items: center;
  padding-bottom: 135px;
  .tituloCart{
    text-align: center;
    font-size: 2.25rem;
    color: white;
    margin-top: 20px;
  }
  .end {
    display: flex;
    align-items: center;
    gap: 20px;
    .valorTotal {
      display: flex;
      padding: 15px 16px;
      align-items: center;
      justify-content: space-between;
      background-color: #c4c3c3;
      border-radius: 10px;
      width: 250px;

      .precoRp{
        color: #429983;
        font-size: 1.375rem;
        font-weight: 700;
      }
    }

    .btnCart{
      background-color: #11895A;
      width: 250px;
      padding: 15px 0px;
      font-size: 1.5rem;
      font-weight: 700;
      border: none;
      border-radius: 10px;
      color: white;
    }

  }
`

export const CartHeader = styled.header`
  content: "";
  height: 500px;
`
