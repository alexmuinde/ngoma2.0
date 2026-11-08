import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaArrowLeft, FaArrowRight, FaUser} from 'react-icons/fa'

export default function Navbar() {

    const navigate = useNavigate()

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>    
                <FaArrowLeft onClick={() => navigate(-1)} className=' w-6 rounded-2xl cursor-pointer'/>
                <FaArrowRight onClick={() => navigate(1)} className=' w-6 rounded-2xl cursor-pointer'/>
            </div>
            <div className=' flex items-center gap-4 '>
                <p className='bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer'>Install App</p>
                <FaUser className='  w-7 h-7 rounded-full cursor-pointer'/>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black  px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black  px-4 py-1 rounded-2xl cursor-pointer'>Podcasts & Shows</p>
        </div>
    </>
  )
}
