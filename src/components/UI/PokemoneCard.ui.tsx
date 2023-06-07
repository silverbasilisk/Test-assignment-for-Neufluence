import React from 'react'

export type PokemoneCard = {
  data: any
}
export const PokemoneCard = ({ data }: PokemoneCard) => {
  return (
    <div className='flex items-center space-x-4 p-4 border-t border-gray-300'>
      <div className='bg-zinc-200'>
        <img src={data.sprites.front_default} alt='Pokemon' width={100} height={100}/>
      </div>
      <div className='flex flex-col'>
        <span>
          {`#${ data.id } - ${ data.name }`} 
        </span>
        <span>
          {`#${ data.height }m/${ data.weight }kg-HP:${ data.stats[ 0 ].base_stat }`} 
        </span>
        <div className='flex space-x-2'>
          {
            data.types.length > 0 &&
            data.types.map((data:any, index: number)=>(
              <div key={ index } className='border rounded-md px-2  border-black'>  
                { data.type.name }
              </div>
            ))
          }
        </div>
      </div>
    </div>
    
  )
}