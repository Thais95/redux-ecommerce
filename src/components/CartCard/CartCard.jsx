import React, { useState } from 'react';
import { SectionCart } from './CartCard.styled';
import ahriFoto from '../../assets/Ahri/AhriImg1Cart.png';
import menos from '../../assets/menos.svg';
import mais from '../../assets/mais.svg';
import { AiTwotoneHeart } from 'react-icons/ai';

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
        <img src={ahriFoto} alt="Foto braum" />
        <div className='descricao'>
          <div className='texto'>
            <h3>Ahri Congregação das Bruxas</h3>
          </div>
          <div className='preco'>
            <p>1200 RP</p>
          </div>
          <div className='precoQuantidade'>
            <div className='quantidade'>
              <i><AiTwotoneHeart /></i>
              <p>Quantidade:</p>
              <i><img onClick={subtrairMaisUm} className='menos' src={menos} alt="" /></i>
              <p>{add < 10 ? `0${add}` : add}</p>
              <i><img onClick={adicionarMaisUm} className='mais' src={mais} alt="" /></i>
            </div>
          </div>
        </div>
      </div>
    </SectionCart>
  )
}
