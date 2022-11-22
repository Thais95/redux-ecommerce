import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 300px;
  background-color: #fff;
  height: 420px;
  border-radius: 5px;
  position: relative;
  margin-left: 5px;
  margin-top: 100px;

  .ContainerImagem {
    width: 300px;
    border-radius: 5px;

    h3 {
      margin: 15px 0px 10px 5px;
    }
  }

  .Imagem {
    width: 300px; /* width of container */
    height: 200px; /* height of container */
    object-fit: cover;
    object-position: 0px 0px; /* try 20% 10% */
    border: 5px solid black;
    border-radius: 5px 5px 0px 0px;
  }

  .CardPrice {
    width: 50%;
    background-color: var(--primary-color);
    border-radius: 0px 0px 0px 5px;

    position: absolute;
    bottom: 0;

    i {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      strong {
        font-size: 16px;
      }
      img {
        width: 15px;
        height: 15px;
        margin-left: 5px;
      }
    }
  }
  .Heart {
    width: 50%;
    background-color: #fff;
    border-radius: 0px 0px 5px 0px;

    position: absolute;
    bottom: 0;
    right: 0;

    i {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      display: flex;
      gap: 30px;
    }
  }
`
