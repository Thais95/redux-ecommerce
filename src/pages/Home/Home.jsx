import React from 'react';
import { BackgroundContainer, ContainerFlex, HomeContainer, HomeHeader } from './Home.styled';
import { HomeCard } from '../../components/HomeCard/HomeCard';

export const Home = () => {

  return (
    <HomeContainer>
      <BackgroundContainer>
        <HomeHeader>
          <h1>League of Legends Skin Sales</h1>
          <h2>As melhores skins de LoL você encontra por aqui, não perca essa oportunidade!</h2>
        </HomeHeader>
        <ContainerFlex>
          <HomeCard />
        </ContainerFlex>
      </BackgroundContainer>
    </HomeContainer>
  )
}
