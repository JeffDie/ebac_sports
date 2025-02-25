import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritoState = {
  itens: Produto[]
}

const initialState: favoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const produtos = action.payload

      if (state.itens.find((produto) => produto.id === produtos.id)) {
        state.itens = state.itens.filter((p) => p.id !== produtos.id)
      } else {
        state.itens.push(produtos)
      }
    }
  }
})

export const { adicionarFav } = favoritoSlice.actions
export default favoritoSlice.reducer
