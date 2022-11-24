import styled from 'styled-components';
import background from '../../assets/errorBg.webp';

export const ErroContainer = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        height: 90vh;
        width: 100%;
        background-color: black;
        opacity: 0.5;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }
    .container {
        margin-top: -100px;
        width: 500px;
    }
    h1 {
        margin-top: -20px;
        color: #f28e0f;
        font-size: 2.8rem;
        font-weight: 700;
        text-shadow: 2px 2px 5px rgba(0, 0, 0);
        user-select: none;
    }
    h2 {
        font-size: 1.8rem;
        color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0);
        user-select: none;
    }
    button {
        width: 230px;
        height: 45px;
        margin-top: 30px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        transition: 0.8s;
        font-size: 1.3rem;
        font-weight: 600;
        color: white;
        background-color: #ea8300;
        &:hover {
            transition: 0.8s;
            transform: scale(1.03);
            box-shadow: 0px 0px 10px rgba(255,138,153);
        }
    }
`