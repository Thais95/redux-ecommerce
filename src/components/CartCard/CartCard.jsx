import { SectionCart } from './CartCard.styled'
import { FaPlusCircle, FaMinusCircle, FaHeart } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { mudarQuantidade } from '../../store/reducers/carrinho'
import { useEffect, useState } from 'react'
import { validate } from 'uuid'

export const CartCard = ({ value }) => {
  // const [valor,setValor] = useState(value.quantidade)

  const dispatch = useDispatch()

  const carrin = useSelector(state => state.carrinho)

  // let quantidades = value.quantidade
  // let idCart = value.id

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
                <button
                  disabled={value.quantidade === 1 && true}
                  onClick={() => {
                    if (value.quantidade >= 1) {
                      dispatch(
                        mudarQuantidade({ id: value.id, quantidade: -1 })
                      )
                    }
                    return
                  }}
                >
                  <FaMinusCircle className="menos" alt="Adicionar quantidade" />
                </button>
              </IconContext.Provider>

              <p className="quant">{value.quantidade}</p>

              <IconContext.Provider value={{ color: '#000000', size: '20' }}>
                <FaPlusCircle
                  onClick={() => {
                    if (value.quantidade >= 1) {
                      dispatch(
                        mudarQuantidade({ id: value.id, quantidade: +1 })
                      )
                    }
                  }}
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
