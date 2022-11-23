import styled from 'styled-components'

export const ContainerFooter = styled.div`
  width: 100vw;
  height: 220px;
  background-color: black;
  margin: 0 auto;
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
        color: var(--detail-color);
        cursor: pointer;
      }
    }
  }
`
