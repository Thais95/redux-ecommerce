import React, { useEffect, useState } from 'react';
import { Header } from './Navbar.styled';
import logo from '../../assets/logo.svg';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mudarBusca, resetarBusca } from '../../store/reducers/busca';


export const Navbar = () => {
  const [valueInput, setValueInput] = useState('')

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(resetarBusca())
  }, [location.pathname, dispatch])

  const handleChange = event => {
    setValueInput(event.target.value);
  }

  const handleClick = () => {
    dispatch(mudarBusca(valueInput));
    setValueInput('');
  }

  return (
    <Header>
      <div className='logoContainer'>

        <Link to={'/'}><img className='logo' src={logo} alt="Logo" /></Link>
        <Link to={'/'} className='home'>Home</Link>

      </div>
      <div className='pesquisaContainer'>
        <div className='Pesquisar'>

          <input type="text"
            placeholder='O que você procura?...'
            value={valueInput}
            onChange={handleChange} />
          <i
            onClick={handleClick}
            className='iconeProcura'>
            <FaSearch />
          </i>

        </div>
        <Link to={'/carrinho'} className='compras'><FaShoppingCart /></Link>
      </div>
    </Header>
  )
}
