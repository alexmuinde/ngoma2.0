import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import {albumsData, assets, songsData} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

export default function DisplayAlbum() {

    const {id} = useParams()
    const albumData = albumsData[id]
    const {playWithId} = useContext(PlayerContext)

  return (
    <>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img src={albumData.image} alt="album" className='w-60 rounded' />
            <div className='flex flex-col'>
                <p>Playlits</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img src={assets.spotify_logo} alt="artist" className='w-5  inline-block' />
                    <b>Spotify</b> - 1,367,876 likes - <b>50 Songs</b> about 3 hr 20 min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 pl-2 mt-10 mb-4 text-[#a7a7a7]'>
            <p># <b>Title</b></p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img src={assets.clock_icon} alt="time" className='m-auto w-4' />
        </div>
        <hr />
        {songsData.map((item, index) => (
            <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-5 text-[#a7a7a7]'>{index + 1}</b>
                    <img src={item.image} alt="song" className='w-10 inline rounded mr-5' />
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>5 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))}
    </>
  )
}
