import React from 'react'
import { Header } from './Navbar.styled'
import logo from '../../assets/logo.png'
import {BsCartPlusFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
export const Navbar = () => {
  return (
    <Header>
      <div className='logoConteiner'>
        <img className='logo' src={logo} alt="" />
        <a href="/">Home</a>
      </div>

      <div className='pesquisaContainer'>
        <div className='Pesquisar'>
        <input type="text" placeholder='O que você procura?'/>
        <i className='iconeProcura'><BiSearchAlt2/></i>
        </div>
        <i className='compras'><BsCartPlusFill/></i>
      </div>
    </Header>
  )
}
