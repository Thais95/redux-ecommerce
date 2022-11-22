import React from 'react';
import { Banner } from '../../components/Banner/Banner';
import { ContainerFlex, HomeContainer, HomeHeader } from './Home.styled';
import logo from '../../assets/logo.png';
import { HomeCard } from '../../components/HomeCard/HomeCard';

export const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <HomeHeader>
        <header>
          <h1>League of Legends Skin Sales</h1>
          <h2>As melhores skins de LoL você encontra por aqui, ótimo preço e segurança!</h2>
        </header>
        <img src={logo} alt="Logo de League of Legends" />
      </HomeHeader>
      <ContainerFlex>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </ContainerFlex>
    </HomeContainer>
  )
}
