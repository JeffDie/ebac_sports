import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaullMiddleware) =>
    getDefaullMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
