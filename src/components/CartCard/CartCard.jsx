// import React, { useState } from 'react'
// import { SectionCart } from './CartCard.styled'
// import fotoBraum from '../../assets/skin-braum.jfif'
// import menos from '../../assets/menos.svg'
// import mais from '../../assets/mais.svg'

// import {AiTwotoneHeart} from 'react-icons/ai'

export const CartCard = ({value}) => {

  // const [add, setAdd] = useState(0)
  // const [valor,setValor] = useState(0)
  // function adicionarMaisUm(){
  //   setAdd(add + 1)
  //   setValor(valor + parseInt(value)) 
  // }

  // function subtrairMaisUm(){
  //   if(add === 0){
  //     setAdd(add)
  //     setValor(valor)
  //   } else{
  //     setAdd(add-1)
  //     setValor(valor - parseInt(value)) 
  //   }

  // }

  return (
    <>
      <h1>dsada</h1>
      {/* <SectionCart>
          <div className='cardsCompras'>
            <img src={fotoBraum} alt="Foto braum"/>
            <div className='descricao'>
              <div className='texto'>
               <h3>Braum Natalino</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo optio consequuntur dolores itaque at reiciendis? Ratione esse consequuntur, magni labore et, quaerat rerum recusandae, porro voluptate nulla voluptatum aperiam.</p>
              </div>

              <div className='precoQuantidade'>

                <div>
                  <h1 className='preco'>R$ {value}</h1>
                </div>

                <div className='quantidade'>
                  <i><AiTwotoneHeart/></i>
                  <p>Quantidade:</p>
                  <i><img onClick={subtrairMaisUm} className='menos' src={menos} alt=""/></i>
                  <p>{add <10 ? `0${add}` : add}</p>
                  <i><img onClick={adicionarMaisUm} className='mais' src={mais} alt=""/></i>
                </div>
              </div>
            </div>
          </div>

          
      </SectionCart>*/}
    </> 
    
  )
}
