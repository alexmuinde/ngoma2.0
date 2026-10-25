import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AlbumItem({image, name, desc, id}) {

    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-45 p-2 px-3 runded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="album" className='rounded' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-[#b3b3b3] text-sm'>{desc}</p>
    </div>
  )
}
