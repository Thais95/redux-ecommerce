import styled from 'styled-components'
import BgCart from '../../assets/shop.webp'

export const CartContainer = styled.div`
  background-image: url(${BgCart});
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
`

export const ContainerCart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  align-items: center;
  padding-bottom: 150px;
  .tituloCart {
    text-align: center;
    font-size: 2rem;
    color: white;
    margin-top: 30px;
    margin-bottom: 20px;
    user-select: none;
  }
  .end {
    display: flex;
    align-items: center;
    gap: 20px;
    .valorTotal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      border-radius: 10px;
      padding: 0 15px;
      width: 250px;
      height: 60px;
      user-select: none;
      color: #012F2D;
      .precoRp {
        color: #429983;
        font-size: 1.375rem;
        font-weight: 700;
      }
    }

    .btnCart {
      background-color: #11895a;
      width: 250px;
      height: 60px;
      font-size: 1.5rem;
      font-weight: 700;
      border: none;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        background-color: #0ca86c;
        scale: 1.02;
        transition: 0.5s;
      }
    }
  }
`

export const CartHeader = styled.header`
    color: white;
    font-size: 3rem;
    font-weight: 700;
    user-select: none;
    text-align: center;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.90);
    height: 500px;
    width: 625px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 200px;
`
