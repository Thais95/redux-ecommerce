import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 300px;
  height: 220px;
  border-radius: 5px;
  position: relative;
  margin-left: 5px;
  margin-bottom: 200px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60));
  transition: 0.8s;
  &:hover {
    filter: drop-shadow(0px 1px 2px rgba(255, 255, 255));
    transition: 0.3;
  }
  p {
    height: 25px;
    background-color: rgba(0, 0, 0, 0.40);
    text-align: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    text-shadow: 2px 2px 1px #000000;
    font-size: 1.2rem;
  }

  .ContainerImagem {
    display: flex;
    align-items: center;
    width: 300px;
    border-radius: 5px;
    margin-bottom: 40px;
    height: 450px;
    h3 {
      margin: 15px 0px 10px 5px;
    }
  }
  .Imagem {
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: 0px 0px;
  }
  .CardPrice {
    width: 50%;
    background-color: #000;
    border-radius: 0px 0px 0px 5px;
    position: absolute;
    bottom: 0;
    i {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 15px;
        height: 15px;
        margin-left: 5px;
      }
    }
  }
  .Heart {
    margin-top: -30px;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding-bottom: 5px;
    .ContainerLowerCard {
      height: 20px;
      margin-top: 5px;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    .fotoCoracao {
      color: red;
    }
    strong {
      font-size: 18px;
      color: #008B48;
      user-select: none;
    }
    i {
      height: 60px;
      font-size: 20px;
      gap: 30px;
      cursor: pointer;
    }
  }
`
