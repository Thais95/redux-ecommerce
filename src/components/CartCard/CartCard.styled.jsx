import styled from 'styled-components'

export const SectionCart = styled.section`
  .cardsCompras {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px 10px;
    margin: 0 auto;
    border-radius: 10px;
    width: 1300px;
    img {
      width: 450px;
      border-radius: 10px 0px 0px 10px;
    }

    .descricao {
      display: flex;
      flex-direction: column;
      .texto {
        margin-left: 10px;
      }

      .precoQuantidade {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 800px;
        padding-left: 10px;
        .preco {
          font-size: 1.375rem;
          font-weight: 500;
          margin-top: -20px;
        }

        .quantidade {
          display: flex;
          align-items: center;
          gap: 20px;
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
      }
    }
  }
`
