import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

export default function SongItem({ name, desc, id, image }) {

  const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="song" className='rounded' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-[#b3b3b3] text-sm'>{desc}</p>
    </div>
  )
}
