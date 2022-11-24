import { SectionCart } from './CartCard.styled';
import { FaPlusCircle, FaMinusCircle, FaHeart, FaRegHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { mudarQuantidade } from '../../store/reducers/carrinho';

export const CartCard = ({ value }) => {
  const dispatch = useDispatch()

  const carrin = useSelector(state => state.carrinho)

  return (
    <SectionCart>
      <div className="cardsCompras">
        <img src={value.foto} alt="Foto da Skin" />
        <div className="descricao">
          <div className="texto">
            <h3>{value.titulo}</h3>
          </div>
          <div className="preco">
            <p>{value.preco} RP</p>
          </div>
          <div className="precoQuantidade">
            <div className="quantidade">
              <i>
                {value.favorito ? (
                  <IconContext.Provider value={{ color: '#f43f4e' }}>
                    <FaHeart />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider value={{ color: '#1a1a1a' }}>
                    <FaRegHeart className="icon" />
                  </IconContext.Provider>
                )}
              </i>
              <p className="quant">Quantidade:</p>

              <button
                className='minus-btn'
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
                <IconContext.Provider value={{ color: '#000000', size: '20' }}>
                  <FaMinusCircle className="menos" alt="Remover quantidade" />
                </IconContext.Provider>
              </button>

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
                  alt="Adicionar quantidade"
                />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </SectionCart>
  )
}
