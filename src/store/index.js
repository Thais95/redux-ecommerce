import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';
import buscaSlice from './reducers/busca'

const store = configureStore({
    reducer: {
        categorias: categoriesSlice,
        itens: itemsSlice,
        busca: buscaSlice
    }
});

export default store;