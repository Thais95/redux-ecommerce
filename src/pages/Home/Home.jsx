import React from 'react';
import { ContainerFlex, HomeContainer, HomeHeader } from './Home.styled';
import logo from '../../assets/logo.png';
import { HomeCard } from '../../components/HomeCard/HomeCard';

export const Home = () => {

  return (
    <HomeContainer>
      <HomeHeader>
        <header>
          <h1>League of Legends Skin Sales</h1>
          <h2>As melhores skins de LoL você encontra por aqui, ótimo preço e segurança!</h2>
        </header>
      </HomeHeader>
      <ContainerFlex>
        <HomeCard />
      </ContainerFlex>
    </HomeContainer>
  )
}
