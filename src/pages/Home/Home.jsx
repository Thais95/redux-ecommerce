import React from 'react';
import { ContainerFlex, HomeContainer, HomeHeader } from './Home.styled';
import { HomeCard } from '../../components/HomeCard/HomeCard';
import background1 from '../../assets/background1.webp';
import background2 from '../../assets/background2.webp';
import background3 from '../../assets/background3.webp';
import background4 from '../../assets/background4.webp';
import background5 from '../../assets/background5.webp';

const backgrounds = [background1, background2, background3, background4, background5];
const randomBg = Math.floor(Math.random() * backgrounds.length);
const selectedBg = backgrounds[randomBg];

export const Home = () => {
  return (
    <HomeContainer style={{backgroundImage: `url(${selectedBg})`}}>
        <HomeHeader>
          <h1>League of Legends Skin Sales</h1>
          <h2>As melhores skins de LoL você encontra por aqui, não perca essa oportunidade!</h2>
        </HomeHeader>
        <ContainerFlex>
          <HomeCard />
        </ContainerFlex>
    </HomeContainer>
  )
}
