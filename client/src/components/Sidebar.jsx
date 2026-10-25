import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {

  const navigate = useNavigate()

  return (
      <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
          <div onClick={()=>navigate('/')} className='flex items-center pl-3 gap-3 cursor-pointer hover:bg-[#1a1a1a]'>
            <img src={assets.home_icon} alt='home' className='w-6' />
            <p className='font-bold'>Home</p>
          </div>
          <div className='flex items-center pl-3 gap-3 cursor-pointer hover:bg-[#1a1a1a]'>
            <img src={assets.search_icon} alt='home' className='w-6' />
            <p className='font-bold'>Search</p>
          </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex  items-center gap-3'>
              <img src={assets.stack_icon} alt='Library' className='w-6' />
              <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
              <img src={assets.arrow_icon} alt='back' className='w-4 cursor-pointer' />
              <img src={assets.plus_icon} alt='add' className='w-4 cursor-pointer' />
            </div>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create your first playlist</h1>
            <p className='text-gray-400 text-sm'>It's easy, we'll help you</p>
            <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4'>Create Playlist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Let us find some podcasts to follow</h1>
            <p className='text-gray-400 text-sm'>We will keep you updated with the latest episodes</p>
            <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4'>Browse Podcasts</button>
          </div>
        </div>
    </div>
  )
}
