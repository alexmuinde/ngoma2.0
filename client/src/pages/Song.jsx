import React from 'react'
import { SlShuffle, SlControlStart, SlControlPlay, SlControlEnd,  } from "react-icons/sl";

export default function Song() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-2 '>
      <div className='w-60 h-60 bg-zinc-700 rounded-sm flex items-center justify-center'>
        Song Profile
      </div>
      <div className='items-start'>Song Title</div>
      <div>Creators Name</div>
      <div className='p-4'>Play Time</div>
      <div className='flex gap-12'>
        <button><SlControlStart /></button>
        <button><SlControlPlay /></button>
        <button><SlControlEnd /></button>
        <button><SlShuffle /></button>
      </div>
    </div>
  )
}
