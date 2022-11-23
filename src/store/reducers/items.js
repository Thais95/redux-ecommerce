import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import eritraHero from 'assets/itens/h1.png';
import dolenHero from 'assets/itens/h2.png';
import gideonHero from 'assets/itens/h3.png';
import huanHero from 'assets/itens/h4.png';
import sombraDragao from 'assets/itens/d1.png';
import tempestadeDragao from 'assets/itens/d2.png';
import douradoDragao from 'assets/itens/d3.png';
import geloDragao from 'assets/itens/d4.png';
import arqUm from 'assets/itens/a1.png';
import arqDois from 'assets/itens/a2.png';
import arqTres from 'assets/itens/a3.png';
import arqQuatro from 'assets/itens/a4.png';
import infUm from 'assets/itens/i1.png';
import infDois from 'assets/itens/i2.png';
import infQuatro from 'assets/itens/i4.png';
import infTres from 'assets/itens/i3.png';
import cavaUm from 'assets/itens/c1.png';
import cavaDois from 'assets/itens/c2.png';
import cavaTres from 'assets/itens/c3.png';
import cavaQuatro from 'assets/itens/c4.png';

const initialState = [{
  titulo: 'Eritra',
  foto: eritraHero,
  favorito: false,
  preco: 1236.99,
  id: uuid(),
  categoria: 'heros'
}, {
  titulo: 'Dolen Sikil',
  foto: dolenHero,
  favorito: false,
  preco: 900,
  id: uuid(),
  categoria: 'heros'
},  {
  titulo: 'Gideon',
  foto: gideonHero,
  favorito: false,
  preco: 1600.99,
  id: uuid(),
  categoria: 'heros'
}, {
  titulo: 'Huan Mulan',
  foto: huanHero,
  favorito: false,
  preco: 4478.96,
  id: uuid(),
  categoria: 'heros'
},  {
  titulo: 'Dragão das Sombras',
  foto: sombraDragao,
  favorito: false,
  preco: 1500.96,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão da Tempestade',
  foto: tempestadeDragao,
  favorito: false,
  preco: 1490.90,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão Dourado',
  foto: douradoDragao,
  favorito: false,
  preco: 2900,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Dragão do Gelo',
  foto: geloDragao,
  favorito: false,
  preco: 1200.99,
  id: uuid(),
  categoria: 'dragao'
}, {
  titulo: 'Arqueira Batedora lv.13',
  foto: arqUm,
  favorito: false,
  preco: 5299.90,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Arqueira Batedora lv.12',
  foto: arqDois,
  favorito: false,
  preco: 3569.99,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Arqueira Batedora lv.11',
  foto: arqTres,
  favorito: false,
  preco: 2279.75,
  id: uuid(),
  categoria: 'arqueiro'
}, {
  titulo: 'Arqueiro Batedor lv.10',
  foto: arqQuatro,
  favorito: false,
  preco: 1049.90,
  id: uuid(),
  categoria: 'arqueiro'
},  {
  titulo: 'Homem Lança lv.13',
  foto: infUm,
  favorito: false,
  preco: 4285.56,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Homem Lança lv.12',
  foto: infDois,
  favorito: false,
  preco: 3028.88,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Homem Lança lv.11',
  foto: infTres,
  favorito: false,
  preco: 2227.68,
  id: uuid(),
  categoria: 'infantaria'
}, {
  titulo: 'Homem Lança lv.10',
  foto: infQuatro,
  favorito: false,
  preco: 44.90,
  id: uuid(),
  categoria: 'infantaria'
},  {
  titulo: 'Lanceiro lv.13',
  foto: cavaUm,
  favorito: false,
  preco: 5359,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Lanceiro lv.12',
  foto: cavaDois,
  favorito: false,
  preco: 4817.33,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Lanceiro lv.11',
  foto: cavaTres,
  favorito: false,
  preco: 1199,
  id: uuid(),
  categoria: 'cavalaria'
}, {
  titulo: 'Lanceiro lv.10',
  foto: cavaQuatro,
  favorito: false,
  preco: 782.91,
  id: uuid(),
  categoria: 'cavalaria'
}];

const itemsSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    }
  }
});

export const { mudarFavorito } = itemsSlice.actions;

export default itemsSlice.reducer;