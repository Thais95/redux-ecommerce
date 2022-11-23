import React from 'react';
import { Header } from './Navbar.styled';
import logo from '../../assets/logo.png';
import {FaShoppingCart, FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Header>
      <div className='logoContainer'>
        <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>
        <Link to={'/'}>Home</Link>
      </div>
      <div className='pesquisaContainer'>
        <div className='Pesquisar'>
        <input type="text" placeholder='O que você procura?'/>
        <i className='iconeProcura'><FaSearch/></i>
        </div>
        <Link to={'/carrinho'} className='compras'><FaShoppingCart/></Link>
      </div>
    </Header>
  )
}
