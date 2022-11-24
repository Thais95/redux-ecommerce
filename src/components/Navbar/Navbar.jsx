import React, {useEffect, useState} from 'react';
import { Header } from './Navbar.styled';
import logo from '../../assets/logo.svg';
import {FaShoppingCart, FaSearch} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { mudarBusca, resetarBusca } from '../../store/reducers/busca';


export const Navbar = () => {

  const [valueInput, setValueInput] = useState('')

  const buscar = useSelector(state=> state.busca)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(()=>{
    dispatch(resetarBusca())
  },[location.pathname, dispatch])


  function handleSubmit(e) {
    e.preventDefault()
    console.log(mudarBusca(valueInput))
  }

  return (
    <Header>
      <div className='logoContainer'>
        <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>
        <Link to={'/'} className='home'>Home</Link>
      </div>
      <div className='pesquisaContainer'>
        <form onSubmit={handleSubmit}>
          <div className='Pesquisar'>
            <input type="text"placeholder='O que você procura?...' onChange={e => setValueInput(e.target.value)}/>

            <button type='submit'  className='iconeProcura'><FaSearch/></button>
          </div>
        </form>
        <Link to={'/carrinho'} className='compras'><FaShoppingCart/></Link>
      </div>
    </Header>
  )
}
