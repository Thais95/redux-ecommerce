import styled from 'styled-components'

export const Header = styled.header`
    height: 60px;
    background-color: black;
    color: white;
    padding: 0 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logoContainer{
        display: flex;
        align-items: center;
        gap: 80px;
        .logo{
            width: 90px;
            cursor: pointer;
        }
        .home {
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: 500;
            color: white;
        }
    }
    .pesquisaContainer{
        display: flex;
        align-items: center;
        gap: 50px;
        a {
            color: white;
        }
        .Pesquisar{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 285px;
            input{
                width: 250px;
                height: 30px;
                padding: 0 15px;
                border-radius: 5px;
                border: none;
                font-size: 0.9rem;
                font-weight: 400;
                color: #161616;
                ::placeholder {
                    color: #9b9b9b;
                }
            }
            .iconeProcura{
                font-size: 1.3rem;
                font-weight: 700;
                color: #fff;
                cursor: pointer;
                padding-top: 5px;
            }
        }
        .compras{
            font-size: 1.3rem;
            padding-top: 5px;
        }

    }
`
