// AudioPlayer.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FaRegCirclePause } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioRef.current?.pause();
      } else if (isPlaying) {
        audioRef.current?.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  return (
    <div className='flex -z-1 sticky justify-center content-center top-0 bg-transparent p-6 pt-10 text-center '>
      <audio
        ref={audioRef}
        src="/kisahcintakita.mp3"
        controlsList="nodownload"
        loop
        className='hidden'
        autoPlay={isPlaying}
      />
      <button id='music-btn' className='text-black font-bold py-2 px-4 bg-gray-100 rounded-full flex' onClick={togglePlay}>
        <div className="music-player play text-blue-700">
          {isPlaying ? <FaRegCirclePause /> : <FaRegPlayCircle />}
        </div>
        <span className='text-xs ml-2 text-left whitespace-nowrap overflow-hidden text-ellipsis'>Kisah Cinta Kita - Hafiz Suip (Instrumental)</span>
      </button>
    </div>
  );
};

export default AudioPlayer;
