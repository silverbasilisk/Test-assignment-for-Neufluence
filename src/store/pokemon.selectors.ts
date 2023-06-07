import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const selectPokemonRoot = createSelector(
  (state: RootState) => state,
  (state) => state.pokemonReducer,
);

export const SelectPokemonList = createSelector(selectPokemonRoot, (state: any) => state.pokemonList);
