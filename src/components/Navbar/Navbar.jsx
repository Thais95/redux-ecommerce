import React, { useEffect } from 'react'
import { Header } from './Navbar.styled'
import logo from '../../assets/logo.svg'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { resetarBusca, mudarBusca } from '../../store/reducers/busca'

export const Navbar = () => {
  const busca = useSelector(state => state.busca)
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(resetarBusca())
  }, [location.pathname, dispatch])

  return (
    <Header>
      <div className="logoContainer">
        <Link to={'/'}>
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link to={'/'} className="home">
          Home
        </Link>
      </div>
      <div className="pesquisaContainer">
        <div className="Pesquisar">
          <input
            type="text"
            value={busca}
            onChange={evento => dispatch(mudarBusca(evento.target.value))}
            placeholder="O que você procura?..."
          />
          <i className="iconeProcura">
            <FaSearch />
          </i>
        </div>
        <Link to={'/carrinho'} className="compras">
          <FaShoppingCart />
        </Link>
      </div>
    </Header>
  )
}
