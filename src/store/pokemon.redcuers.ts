import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPokemonSlice {
  pokemonDetail: any;
  pokemonList: Array<any>;
}

const initialState: IPokemonSlice = {
  pokemonDetail: {},
  pokemonList: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonLists: (state: any, action: PayloadAction<any>) => {
      state.pokemonList = [
        ...(state.pokemonList || []),
        action.payload,
      ];
    },
  },
});

export const { setPokemonLists } = pokemonSlice.actions;

export default pokemonSlice.reducer;
