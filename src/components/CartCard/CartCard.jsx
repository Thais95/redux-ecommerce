import React, { useState } from 'react'
import { SectionCart } from './CartCard.styled'
import ahriFoto from '../../assets/Ahri/AhriImg1Cart.png'
import { FaPlusCircle, FaMinusCircle, FaHeart } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { useDispatch } from 'react-redux'
import { mudarQuantidade } from '../../store/reducers/carrinho'

export const CartCard = ({ value }) => {
  // const [quantidade, setQuantidade] = useState(value.quantidade)
  const dispatch = useDispatch()
  return (
    <SectionCart>
      <div className="cardsCompras">
        <img src={value.foto} alt="Foto da Skin" />
        <div className="descricao">
          <div className="texto">
            <h3>{value.titulo}</h3>
          </div>
          <div className="preco">
            <p>{value.preco} </p>
          </div>
          <div className="precoQuantidade">
            <div className="quantidade">
              <IconContext.Provider value={{ color: '#f43f4e', size: '20' }}>
                <FaHeart className="fotoCoracao" />
              </IconContext.Provider>
              <p className="quant">Quantidade:</p>
              <IconContext.Provider value={{ color: '#000000', size: '20' }}>
                <FaMinusCircle
                  onClick={() => {
                    if (value.quantidade >= 1) {
                      dispatch(mudarQuantidade(value.id, value.quantidade))
                    }
                  }}
                  className="menos"
                  alt="Adicionar quantidade"
                />
              </IconContext.Provider>
              <p className="quant">{value.quantidade}</p>
              <IconContext.Provider value={{ color: '#000000', size: '20' }}>
                <FaPlusCircle
                  onClick={() =>
                    dispatch(mudarQuantidade(value.id, value.quantidade++))
                  }
                  className="mais"
                  alt="Remover quantidade"
                />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </SectionCart>
  )
}
