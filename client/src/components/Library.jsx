import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaUser } from 'react-icons/fa'
import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

export default function Library() {

    const navigate = useNavigate()
    const { playWithId } = useContext(PlayerContext)
    const [localSongs, setLocalSongs] = useState([])

    const handleFolderUpload = (event) => {
        const files = Array.from(event.target.files)
        // Filter strictly for audio file formats
        const audioFiles = files.filter(file => file.type.startsWith('audio/') || /\.(mp3|wav|m4a|aac|flac)$/i.test(file.name))

        const formattedSongs = audioFiles.map((file, index) => ({
            id: `local-${index}`,
            name: file.name.replace(/\.[^/.]+$/, ""),
            image: assets.song_icon || "https://placehold.co/40", 
            file: URL.createObjectURL(file), // Creates local blob stream
            desc: "Device Audio"
        }))

        setLocalSongs(formattedSongs)
    }

    return (
        <div className='p-4 text-white pb-20'>
            {/* Top Navigation Bar */}
            <div className='w-full flex justify-between items-center font-semibold mb-6'>
                <div className='flex items-center gap-2'>    
                    <FaArrowLeft onClick={() => navigate(-1)} className='w-6 rounded-2xl cursor-pointer hover:bg-[#ffffff2b] p-1'/>
                    <FaArrowRight onClick={() => navigate(1)} className='w-6 rounded-2xl cursor-pointer hover:bg-[#ffffff2b] p-1'/>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer border border-neutral-700'>Install App</p>
                    <FaUser className='w-7 h-7 rounded-full cursor-pointer bg-neutral-800 p-1'/>
                </div>
            </div>

            {/* Folder Upload Header */}
            <div className='mt-4 mb-6 flex flex-col gap-3'>
                <h1 className='text-3xl font-bold'>My Local Library</h1>
                <p className='text-sm text-[#a7a7a7]'>Load your device music folder to listen locally:</p>
                <label className='bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2.5 rounded-full w-fit cursor-pointer text-sm shadow-md transition inline-block'>
                    Choose Music Folder
                    <input 
                        type="file" 
                        webkitdirectory="true" 
                        directory="true" 
                        multiple 
                        onChange={handleFolderUpload} 
                        className='hidden' 
                    />
                </label>
            </div>

            {/* Table Header */}
            <div className='grid grid-cols-1 pl-2 mt-8 mb-2 text-[#a7a7a7] border-b border-neutral-800 pb-2'>
                <p># &nbsp; &nbsp; <b>Title</b></p>
            </div>

            {/* Song List / Empty State */}
            {localSongs.length === 0 ? (
                <div className='text-center py-16 text-[#a7a7a7]'>
                    <p className='text-lg'>Your local library is empty.</p>
                    <p className='text-sm mt-1'>Click the green button above to import your music files.</p>
                </div>
            ) : (
                <div className='flex flex-col'>
                    {localSongs.map((item, index) => (
                        <div 
                            onClick={() => playWithId(item, localSongs)} 
                            key={item.id} 
                            className='grid grid-cols-1 gap-2 p-2.5 text-[#a7a7a7] hover:bg-[#ffffff15] cursor-pointer items-center rounded transition'
                        >
                            <div className='text-white flex items-center'>
                                <b className='mr-6 text-[#a7a7a7] w-4 text-right'>{index + 1}</b>
                                <img src={item.image} alt="song" className='w-10 h-10 inline rounded mr-4 object-cover' />
                                <span className='font-medium'>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}