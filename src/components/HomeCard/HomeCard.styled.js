import styled from 'styled-components'

export const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  transition: 1s;
  &:hover {
    transform: scale(1.05);
    transition: 1s;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 180px;
  height: 280px;
  border-radius: 12px;
  img {
    width: 200px;
    height: 300px;
    border-radius: 12px;
    object-fit: cover;
    -webkit-user-drag: none;
  }
`

export const CardTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  color: white;
`
