import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import imgAhri1 from '../../assets/Ahri/AhriImg1.png'
import imgAhri2 from '../../assets/Ahri/AhriImg2.png'
import imgAhri3 from '../../assets/Ahri/AhriImg3.png'
import imgAhri4 from '../../assets/Ahri/AhriImg4.png'

import imgBrand1 from '../../assets/Brand/BrandImg1.png'
import imgBrand2 from '../../assets/Brand/BrandImg2.png'
import imgBrand3 from '../../assets/Brand/BrandImg3.png'
import imgBrand4 from '../../assets/Brand/BrandImg4.png'

import imgEkko1 from '../../assets/Ekko/EkkoImg1.png'
import imgEkko2 from '../../assets/Ekko/EkkoImg2.png'
import imgEkko3 from '../../assets/Ekko/EkkoImg3.png'
import imgEkko4 from '../../assets/Ekko/EkkoImg4.png'

import imgLeeSin1 from '../../assets/LeeSin/LeeSinImg1.png'
import imgLeeSin2 from '../../assets/LeeSin/LeeSinImg2.png'
import imgLeeSin3 from '../../assets/LeeSin/LeeSinImg3.png'
import imgLeeSin4 from '../../assets/LeeSin/LeeSinImg4.png'

import imgLux1 from '../../assets/Lux/LuxImg1.png'
import imgLux2 from '../../assets/Lux/LuxImg2.png'
import imgLux3 from '../../assets/Lux/LuxImg3.png'
import imgLux4 from '../../assets/Lux/LuxImg4.png'

import imgVi1 from '../../assets/Vi/ViImg1.png'
import imgVi2 from '../../assets/Vi/ViImg2.png'
import imgVi3 from '../../assets/Vi/ViImg3.png'
import imgVi4 from '../../assets/Vi/ViImg4.png'

const initialState = [
  {
    titulo: 'Ahri Congregação das Bruxas',
    foto: imgAhri1,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'ahri'
  },
  {
    titulo: 'Ahri K/DA',
    foto: imgAhri3,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'ahri'
  },
  {
    titulo: 'Ahri Florescer Espiritual',
    foto: imgAhri2,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'ahri'
  },
  {
    titulo: 'Ahri Fliperama',
    foto: imgAhri4,
    favorito: false,
    preco: 1250,
    id: uuid(),
    categoria: 'ahri'
  },
  {
    titulo: 'Ekko Fogolume',
    foto: imgEkko4,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'ekko'
  },
  {
    titulo: 'Ekko True Damage',
    foto: imgEkko3,
    favorito: false,
    preco: 1350,
    id: uuid(),
    categoria: 'ekko'
  },
  {
    titulo: 'Ekko Tempestade de Areia',
    foto: imgEkko1,
    favorito: false,
    preco: 650,
    id: uuid(),
    categoria: 'ekko'
  },
  {
    titulo: 'Pulsefire Ekko',
    foto: imgEkko2,
    favorito: false,
    preco: 3150,
    id: uuid(),
    categoria: 'ekko'
  },
  {
    titulo: 'Lee Sin Emissário da Escuridão',
    foto: imgLeeSin1,
    favorito: false,
    preco: 875,
    id: uuid(),
    categoria: 'leesin'
  },
  {
    titulo: 'Lee Sin Punhos Divinos',
    foto: imgLeeSin3,
    favorito: false,
    preco: 1820,
    id: uuid(),
    categoria: 'leesin'
  },
  {
    titulo: 'Lee Sin Punhos de Aço',
    foto: imgLeeSin2,
    favorito: false,
    preco: 875,
    id: uuid(),
    categoria: 'leesin'
  },
  {
    titulo: 'Lee Sin Dragão da Tormenta',
    foto: imgLeeSin4,
    favorito: false,
    preco: 875,
    id: uuid(),
    categoria: 'leesin'
  },
  {
    titulo: 'Lux Imperatriz Lunar',
    foto: imgLux1,
    favorito: false,
    preco: 875,
    id: uuid(),
    categoria: 'lux'
  },
  {
    titulo: 'Lux Cosmos Negro',
    foto: imgLux3,
    favorito: false,
    preco: 1350,
    id: uuid(),
    categoria: 'lux'
  },
  {
    titulo: 'Lux de Porcelana',
    foto: imgLux2,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'lux'
  },
  {
    titulo: 'Lux Elementalista',
    foto: imgLux4,
    favorito: false,
    preco: 1820,
    id: uuid(),
    categoria: 'lux'
  },
  {
    titulo: 'Vi Arcane',
    foto: imgVi4,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'vi'
  },
  {
    titulo: 'Vi PsyOps',
    foto: imgVi3,
    favorito: false,
    preco: 1350,
    id: uuid(),
    categoria: 'vi'
  },
  {
    titulo: 'Vi Reinos Combatentes',
    foto: imgVi1,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'vi'
  },
  {
    titulo: 'Vi Demoníaca',
    foto: imgVi2,
    favorito: false,
    preco: 590,
    id: uuid(),
    categoria: 'vi'
  },
  {
    titulo: 'Brand Galante',
    foto: imgBrand4,
    favorito: false,
    preco: 975,
    id: uuid(),
    categoria: 'brand'
  },
  {
    titulo: 'Brand Fogo Espiritual',
    foto: imgBrand3,
    favorito: false,
    preco: 1350,
    id: uuid(),
    categoria: 'brand'
  },
  {
    titulo: 'Brand Dragão Eterno',
    foto: imgBrand2,
    favorito: false,
    preco: 1820,
    id: uuid(),
    categoria: 'brand'
  },
  {
    titulo: 'Brand Chefão',
    foto: imgBrand1,
    favorito: false,
    preco: 1820,
    id: uuid(),
    categoria: 'brand'
  }
]

const itemsSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if (item.id === payload) item.favorito = !item.favorito
        return item
      })
    }
  }
})

export const { mudarFavorito } = itemsSlice.actions

export default itemsSlice.reducer
