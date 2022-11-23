import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 300px;

  height: 220px;
  border-radius: 5px;
  position: relative;
  margin-left: 5px;
  margin-bottom: 200px;

  p {
    text-align: center;
    justify-content: center;

    color: #fff;
    font-weight: 600;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.9);
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
    background-color: var(--primary-color);
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
    margin-top: -45px;
    width: 100%;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding-bottom: 5px;

    .ContainerLowerCard {
      margin-top: 25px;
      height: 20px;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    .fotoCoracao {
      color: red;
    }

    strong {
      font-size: 18px;
    }

    i {
      height: 60px;

      font-size: 20px;

      gap: 30px;
      cursor: pointer;
    }
  }
`
