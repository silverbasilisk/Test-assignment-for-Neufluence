import React, { useMemo, useState } from 'react';
import { useGetPokemonsQuery } from '@/store/pokemon.api';
import { useSelector } from 'react-redux';
import { SelectPokemonList } from '@/store/pokemon.selectors';
import { PokemoneCard } from '../UI';

const Gallery: React.FC = () => {
  const [ text, setText ] = useState('')
  const [ filtersList, setFilterList ] = useState<any[]>([])
  useGetPokemonsQuery(150) //set limit to 150
  const pokemonList = useSelector(SelectPokemonList)

  useMemo(() => {
    if(text===''){
      setFilterList(pokemonList)
    }  
  }, [ pokemonList, text ])


  const handleSearch = () => {
    if(text === ''){
      setFilterList(pokemonList)
      return
    }
    if(text!=='' && pokemonList.length > 0){
      setFilterList(pokemonList.filter((pokemon:any)=>{
        const comparedText = pokemon.id + pokemon.name
        if (comparedText.includes(text)){
          return true
        }else{
          return false
        }
      }))
    }
  }
  
  useMemo(()=>{
    handleSearch()
  },[ text ]) 

  return (
    <div className='w-full flex justify-center p-4'>  
      <div className='pb-4'>
        <div className='w-full'>
          <input type='text' value={text} placeholder={'Search a pokemon'} onChange={(e)=>setText(e.target.value)} className='w-[300px] focus:border-0 focus:outline-0'/>
        </div>
        <div className='h-[800px] overflow-y-scroll'>
          {
            filtersList.length > 0 ?(          
              filtersList.map((data:any, index: number)=>(
                <PokemoneCard
                  key={ index }
                  data = { data }
                />
              ))
            ):
              <p> Not found</p>
          }
        </div>      
      </div> 
    </div>         
  );
};

export default Gallery;
