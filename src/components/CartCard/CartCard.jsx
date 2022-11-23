import React, { useState } from 'react';
import { SectionCart } from './CartCard.styled';
import ahriFoto from '../../assets/Ahri/AhriImg1Cart.png';
import { FaPlusCircle, FaMinusCircle, FaHeart } from 'react-icons/fa';
import { IconContext } from "react-icons";

export const CartCard = ({ value }) => {

  const [add, setAdd] = useState(0)
  const [valor, setValor] = useState(0)
  function adicionarMaisUm() {
    setAdd(add + 1)
    setValor(valor + parseInt(value))
  }

  function subtrairMaisUm() {
    if (add === 0) {
      setAdd(add)
      setValor(valor)
    } else {
      setAdd(add - 1)
      setValor(valor - parseInt(value))
    }

  }

  return (
    <SectionCart>
      <div className='cardsCompras'>
        <img src={ahriFoto} alt="Foto da Skin" />
        <div className='descricao'>
          <div className='texto'>
            <h3>Ahri Congregação das Bruxas</h3>
          </div>
          <div className='preco'>
            <p>1200 RP</p>
          </div>
          <div className='precoQuantidade'>
            <div className='quantidade'>
            <IconContext.Provider  value={{ color: '#f43f4e', size: '20' }}>
              <FaHeart className="fotoCoracao" />
            </IconContext.Provider>
              <p className='quant'>Quantidade:</p>
              <IconContext.Provider  value={{ color: '#000000', size: '20' }}>
                <FaMinusCircle onClick={subtrairMaisUm} className='menos' alt="Adicionar quantidade" />
              </IconContext.Provider>
              <p className='quant'>{add < 10 ? `0${add}` : add}</p>
              <IconContext.Provider  value={{ color: '#000000', size: '20' }}>
                <FaPlusCircle onClick={adicionarMaisUm} className='mais' alt="Remover quantidade" />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </SectionCart>
  )
}
