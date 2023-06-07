import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setPokemonLists } from './pokemon.redcuers';

const API_PREFIX = 'https://pokeapi.co/api/v2/';

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: API_PREFIX,
  }),
  endpoints: (builder: any) => ({
    getPokemons: builder.query({
      query: (limit: number) =>
        `pokemon?limit=${limit}`,
      transformResponse(response: any) {
        return response;
      },

      transformErrorResponse(err: { data: any; }) {
        return err.data;
      },
      async onQueryStarted(arg: any, { queryFulfilled, dispatch }: { queryFulfilled: any, dispatch: any }) {
        try {
          const { data } = await queryFulfilled;
          if(data.results?.length>0){
            for(const pokemon of data.results){
              const respObj = await fetch(pokemon.url)
              const pokemonJson = await respObj.json()
              console.warn('pokemonJson',pokemonJson)
              dispatch(setPokemonLists(pokemonJson))
            }
          }
          console.warn('pokemon deatil', data)
        } catch (err) {
          console.error(err);
        }
      },
    }),
    getPokemonDetail: builder.query({
      query: (number: number) =>
        `pokemon/${number}`,
      transformResponse(response: any) {
        return response;
      },

      transformErrorResponse(err: { data: any; }) {
        return err.data;
      },
      async onQueryStarted(arg: any, { queryFulfilled, dispatch }: { queryFulfilled: any, dispatch: any }) {
        try {
          const { data } = await queryFulfilled;
          console.warn('pokemon deatil', data)
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonDetailQuery } = pokemonApi;
