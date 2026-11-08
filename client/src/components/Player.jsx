import {useContext} from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import {FaRandom, FaPlay, FaPause, FaForward, FaBackward} from 'react-icons/fa'

export default function Player() {

    const {track, seekBg, seekBar, playStatus, play, pause, time, previous, next, seekSong, isShuffle, toggleShuffle} = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img src={track.image} alt='Player' className='w-12 h-12 object-cover rounded' />
            <div>
                <p className='font-medium'>{track.name}</p>
                {/* Safe slice check for description */}
                <p className='text-gray-400 text-sm'>{track.desc ? track.desc.slice(0, 12) : "Local Track"}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-6 items-center'>
                
                {/* Shuffle button dynamically changes color when active */}
                <FaRandom 
                    onClick={toggleShuffle} 
                    className={`w-4 cursor-pointer transition ${isShuffle ? 'text-green-500' : 'text-white hover:text-gray-300'}`} 
                />
                <FaBackward onClick={previous} className='w-4 cursor-pointer hover:text-gray-300' />
                {playStatus 
                ? <FaPause onClick={pause} className='w-4 cursor-pointer hover:text-gray-300' />
                : <FaPlay onClick={play} className='w-4 cursor-pointer hover:text-gray-300' />
                }
                <FaForward onClick={next} className='w-4 cursor-pointer hover:text-gray-300' />
                
            </div>
            <div className='flex items-center gap-5'>
                <p className='text-gray-400 text-sm'>
                    {time.currentTime.minute}:{time.currentTime.second < 10 ? '0' + time.currentTime.second : time.currentTime.second}
                </p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-125 bg-gray-600 rounded-full cursor-pointer h-1'>
                    <hr ref={seekBar} className='w-0 bg-green-500 border-none h-1 rounded-full' />
                </div>
                <p className='text-gray-400 text-sm'>
                    {time.totalTime.minute}:{time.totalTime.second < 10 ? '0' + time.totalTime.second : time.totalTime.second}
                </p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img src={assets.plays_icon} alt='' className='w-4 cursor-pointer hover:w-6' />
            <img src={assets.mic_icon} alt='' className='w-4 cursor-pointer hover:w-6' />
            <img src={assets.queue_icon} alt='' className='w-4 cursor-pointer hover:w-6' />
            <img src={assets.speaker_icon} alt='' className='w-4 cursor-pointer hover:w-6' />
            <img src={assets.volume_icon} alt='' className='w-4 cursor-pointer hover:w-6' />
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
            <img src={assets.mini_player_icon} alt='' className='w-4 cursor-pointer hover:w-6' />
            <img src={assets.zoom_icon} alt='' className='w-4 cursor-pointer hover:w-6' />
        </div>
    </div>
  )
}