import styled from "styled-components";

export const ContainerCart = styled.section`
     width: 1700px;
     margin: 0 auto;
     margin-bottom: 200px;
.end{
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        .valorTotal{
            display: flex;
            padding: 15px 20px;
            align-items: center;
            justify-content: space-between;
            background-color: #c4c3c3;
            border-radius: 10px;
            width: 600px;
        }

        button{
            display: flex;
            justify-content: center;
            border: none;
            background-color: var(--secondary-color);
            color: white;
            font-size: 1.5rem;
            padding: 15px 20px;
            border-radius: 30px;
            cursor: pointer;
            width: 220px;
            white-space: nowrap;
        }
    }
`