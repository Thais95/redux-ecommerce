import styled from "styled-components";

export const Header = styled.header`
    background-color: var(--secondary-color);
    color: white;
    padding: 15px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoConteiner{
        display: flex;
        align-items: center;
        gap: 100px;

        .logo{
            width: 200px;
        }

        a{
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
        }
    }

    .pesquisaContainer{
        display: flex;
        align-items: center;
        gap: 50px;

        
        .Pesquisar{
            position: relative;
            
            input{
                width: 400px;
                padding: 8px;
                border-radius: 5px;
                border: none;
                font-size: 1rem;
                font-weight: 550;
            }

            .iconeProcura{
                position: absolute;
                font-size: 1.5rem;
                font-weight: 700;
                top: 6px;
                right: 15px;
                color: #000000;
            }
        }

        .compras{
            font-size: 1.5rem;
            padding-top: 5px;
        }

    }

`