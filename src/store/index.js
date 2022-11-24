import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './reducers/categories'
import itemsSlice from './reducers/items'
import buscaSlice from './reducers/busca'
import carrinhoSlice from './reducers/carrinho'

const store = configureStore({
  reducer: {
    categorias: categoriesSlice,
    itens: itemsSlice,
    busca: buscaSlice,
    carrinho: carrinhoSlice
  }
})

export default store
