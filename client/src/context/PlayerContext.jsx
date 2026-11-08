import { createContext, useRef, useState, useEffect } from "react"
import { songsData } from "../assets/assets"

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {

    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const [queue, setQueue] = useState(songsData)
    
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    })

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play()
            setPlayStatus(true)
        }
    }

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            setPlayStatus(false)
        }
    }

    // Handles both built-in songs and local device songs seamlessly
    const playWithId = async (songOrId, customQueue = null) => {
        let selectedTrack;
        
        if (customQueue) {
            setQueue(customQueue)
        }

        if (typeof songOrId === 'object' && songOrId !== null) {
            selectedTrack = songOrId
        } else {
            selectedTrack = queue[songOrId] || songsData[songOrId]
        }

        if (selectedTrack) {
            setTrack(selectedTrack)
            
            // Wait a split second for React to update the audio src attribute, then play
            setTimeout(async () => {
                if (audioRef.current) {
                    try {
                        await audioRef.current.play()
                        setPlayStatus(true)
                    } catch (error) {
                        console.error("Playback failed:", error)
                    }
                }
            }, 100)
        }
    }

    const toggleShuffle = () => {
        setIsShuffle(!isShuffle)
    }

    const previous = async () => {
        const currentIndex = queue.findIndex(item => item.id === (track.id ?? track.name))
        if (currentIndex > 0) {
            playWithId(queue[currentIndex - 1])
        }
    }

    const next = async () => {
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * queue.length)
            playWithId(queue[randomIndex])
        } else {
            const currentIndex = queue.findIndex(item => item.id === (track.id ?? track.name))
            if (currentIndex !== -1 && currentIndex < queue.length - 1) {
                playWithId(queue[currentIndex + 1])
            }
        }
    }

    const seekSong = async (e) => {
        if (audioRef.current && seekBg.current) {
            audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
        }
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = () => {
                    if (audioRef.current.duration) {
                        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%"
                        setTime({
                            currentTime: {
                                second: Math.floor(audioRef.current.currentTime % 60),
                                minute: Math.floor(audioRef.current.currentTime / 60)
                            },
                            totalTime: {
                                second: Math.floor(audioRef.current.duration % 60) || 0,
                                minute: Math.floor(audioRef.current.duration / 60) || 0
                            }
                        })
                    }
                }

                audioRef.current.onended = () => {
                    next()
                }
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [track, queue, isShuffle])

    const contextValue = {
        audioRef, seekBg, seekBar, 
        track, setTrack, playStatus, setPlayStatus, time, setTime, 
        play, pause, playWithId, previous, next, seekSong, 
        isShuffle, toggleShuffle, setQueue
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider