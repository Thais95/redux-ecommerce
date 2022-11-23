import styled from 'styled-components'

export const ContainerFooter = styled.div`
  height: 220px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .Container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    text-align: center;
    color: #fff;
    align-items: center;
    h2 {
      padding-bottom: 20px;
    }
  }
  .ContainerIcon {
    font-size: 30px;
    padding: 10px;
    gap: 10px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    i {
      :hover {
        color: #d5336e;
        cursor: pointer;
      }
    }
  }
`
