import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { DefaultPageContainer } from './DefaultPage.styled';

export const DefaultPage = () => {
  return (
    <DefaultPageContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </DefaultPageContainer>
  )
}
