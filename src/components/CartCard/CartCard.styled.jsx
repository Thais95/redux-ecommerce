import styled from 'styled-components'

export const SectionCart = styled.section`
  .cardsCompras {
    display: flex;
    align-items: flex-start;
    background-color: white;
    padding: 10px 10px;
    margin: 0 auto;
    border-radius: 10px;
    width: 800px;
    height: 120px;
    position: relative;
    .btn {
      background: transparent;
      border: none;
      outline: none;
    }
    img {
      -webkit-user-drag: none;
      height: 100px;
      width: 300px;
      object-fit: cover;
      object-position: top;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    .descricao {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-left: 15px;
      .texto {
        font-size: 1.2rem;
        color: #012F2D;
        user-select: none;
      }
      .preco {
          font-size: 1.3rem;
          font-weight: 600;
          color: #012F2D;
          user-select: none;
      }
      .precoQuantidade {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
        position: absolute;
        right: 10px;
        bottom: 10px;
        .quantidade {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 50px;
          i {
            padding-top: 5px;
            font-size: 1rem;
          }
          .mais {
            width: 30px;
            cursor: pointer;
          }
          .menos {
            width: 30px;
            cursor: pointer;
          }
        }
        .quant {
          user-select: none;
        }
      }
    }
  }
`
