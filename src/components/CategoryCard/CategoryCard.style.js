import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 300px;
  height: 220px;
  border-radius: 5px;
  position: relative;
  margin-left: 5px;
  margin-bottom: 250px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60));
  transition: 0.8s;
  &:hover {
    filter: drop-shadow(0px 1px 2px rgba(255, 255, 255, 0.1));
    transition: 0.3;
  }
  p {
    height: 25px;
    padding-top: 5px;
    margin-bottom: 15px;
    text-align: center;
    justify-content: center;
    color: #e1e1e1;
    font-weight: 500;
    text-shadow: 2px 2px 2px #000000;
    font-size: 1.1rem;
    user-select: none;
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
    margin-top: -5px;
    width: 100%;
    background-color: rgb(0,0,0, 0.5);
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 10px;
    .ContainerLowerCard {
      height: 20px;
      margin-top: 5px;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    strong {
      font-size: 18px;
      color: #2ec67c;
      user-select: none;
    }
    i {
      height: 60px;
      font-size: 20px;
      gap: 30px;
      cursor: pointer;
    }
  }
  .icon {
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      transform: scale(1.2);
    }
  }
`
