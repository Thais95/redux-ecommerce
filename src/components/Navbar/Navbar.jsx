import React from 'react';
import { Header } from './Navbar.styled';
// import logo from '../../assets/logoNav.png';
import {BsCartPlusFill} from 'react-icons/bs';
import {BiSearchAlt2} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Header>
      <div className='logoConteiner'>
        {/* <img className='logo' src={logo} alt="" /> */}
        <Link to={'/'}>Home</Link>
      </div>
      <div className='pesquisaContainer'>
        <div className='Pesquisar'>
        <input type="text" placeholder='O que você procura?'/>
        <i className='iconeProcura'><BiSearchAlt2/></i>
        </div>
        <Link to={'/carrinho'} className='compras'><BsCartPlusFill/></Link>
      </div>
    </Header>
  )
}
