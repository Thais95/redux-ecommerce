import styled from 'styled-components'

export const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  margin-top: -50px;
  transition: 0.5;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 280px;
  border-radius: 12px;
  cursor: pointer;
  img {
    width: 170px;
    height: 250px;
    border-radius: 12px;
    object-fit: cover;
    -webkit-user-drag: none;
    border: 2px solid rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`

export const CardTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: white;
`
