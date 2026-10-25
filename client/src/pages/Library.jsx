import React from 'react'

export default function Library() {
  return (
    <div className='grid grid-cols-[auto_1fr]  gap-2 items-center p-1 bg-zinc-900 rounded-sm border-b-2 border-zinc-600'>
      <div className=' w-14 h-12 bg-zinc-700 rounded-sm flex items-center justify-center'>
        Song Profile
      </div>
      <div className='flex flex-col gap-1 '>
        <div>Song Title</div>
        <div className='text-sm '>Creators Name</div>
      </div>
    </div>
  )
}