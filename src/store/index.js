import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';

const store = configureStore({
    reducer: {
        categorias: categoriesSlice,
        itens: itemsSlice,
    }
});

export default store;