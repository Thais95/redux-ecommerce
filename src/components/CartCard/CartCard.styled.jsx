import styled from "styled-components";

export const SectionCart = styled.section`
    margin-top: 100px;
    .cardsCompras{
        display: flex;
        align-items: center;
        background-color: #c4c3c3;
        padding-right: 50px;
        margin: 0 auto;
        border-radius: 10px;
        img{
            width: 250px;
            border-radius: 10px 0px 0px 10px;
        }

        .descricao{
            display: flex;
            flex-direction: column;

            .texto{
            margin-left: 10px;
            }

            .precoQuantidade{
                display: flex;
                align-items: center;
                justify-content: space-between;

                .preco{
                    background-color: #0939d6;
                    color: white;
                    width: 100px;
                    padding: 10px;
                    margin-top: 10px;
                }

                .quantidade{
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    i{
                        padding-top: 5px;
                        font-size: 1rem;
                    }

                    .mais{
                        width: 30px;
                        cursor: pointer;
                    }

                    .menos{
                        width: 30px;
                        cursor: pointer;
                    }
                }
            }

        }
    }

    

`