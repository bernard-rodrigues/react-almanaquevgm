import { useEffect, useRef, useState } from 'react';
import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import './styles.scss'

export function Player(){
    const audioRef = useRef<HTMLAudioElement>(null);

    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(100);

    const {
        currentEpisode,
        isPlaying,
        isHidden,
        setPlayingState,
        togglePlay,
        clearPlayerState,
        toggleHidden
    } = usePlayer()

    useEffect(() => {
        if(!audioRef.current){
            return;
        }

        if(isPlaying){
            audioRef.current.play();
        }else{
            audioRef.current.pause();
        }
    }, [isPlaying])

    function handleEpisodeEnded(){
        clearPlayerState()
    }

    function setupProgressListener(){
        audioRef.current?.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current?.currentTime!))
        })
    }

    function audioForward(){
        if(audioRef.current != undefined && audioRef.current.currentTime + 30 < audioRef.current.duration){
            audioRef.current.currentTime += 30
        }
    }

    function audioBackward(){
        if(audioRef.current != undefined && audioRef.current.currentTime - 10 > 0){
            audioRef.current.currentTime -= 10
        }
    }

    function handleSeek(amount: number | number[]){
        if(audioRef.current != undefined && typeof amount == 'number'){
            audioRef.current.currentTime = amount;
            setProgress(amount)
        }
    }

    function handleVolume(amount: number | number[]){
        if(audioRef.current != undefined && typeof amount == 'number'){
            audioRef.current.volume = amount/100;
            setVolume(amount)
        }
    }
    
    return(
        <div id="player" className={isHidden ? "hidden" : ""}>
            <div className="playerLeft">
                <img className="playerThumb" src={currentEpisode?.image} alt={currentEpisode?.title}></img>
                <div className="info">
                    <div className="currentEpisode">{currentEpisode?.title}</div>
                </div>
            </div>
            <div className="btnsLeftContainer">
                <div className="progress">    
                    <div className="slider">
                        <span>{convertDurationToTimeString(Math.floor(progress))}</span>
                        <Slider 
                            max={audioRef.current?.duration}
                            value={progress}
                            onChange={handleSeek}
                            trackStyle={{backgroundColor: '#615ae8'}}
                            railStyle={{ backgroundColor: '#076579' }}
                            handleStyle={{ borderColor: '#1d1d1b', borderWidth: 4 }}
                        />
                        <span>{audioRef.current?.duration ? convertDurationToTimeString(Math.floor(audioRef.current?.duration!)) : "00:00:00"}</span>
                    </div>
                </div>
                <div className="btns">
                    <div className="backward iconBackward">
                        <img src="/fast-forward-circle-fill.svg" alt="Backward Button" onClick={audioBackward}/>
                    </div>
                    <div className="playPause iconPlay" onClick={togglePlay}>
                        { isPlaying
                            ? <img src="/pause-circle-fill.svg" alt="Pause Button" />
                            : <img src="/play-circle-fill.svg" alt="Play Button" />
                        }
                    </div>
                    <div className="forward iconForward">
                        <img src="/fast-forward-circle-fill.svg" alt="Forward Button" onClick={audioForward}/>
                    </div>
                </div>
            </div>
            <div className="btnsRightContainer">
                <div className="volumeContainer">
                    <span>{volume}</span>
                    <Slider 
                        max={100}
                        value={volume}
                        onChange={handleVolume}
                        trackStyle={{backgroundColor: '#16e3e8'}}
                        railStyle={{ backgroundColor: '#076579' }}
                        handleStyle={{ borderColor: '#1d1d1b', borderWidth: 4 }}
                    />
                    <img className="volumeIcon"
                        src={`
                            ${volume == 0 ? '/volume-mute-fill.svg' : ''}
                            ${volume > 0 && volume < 60 ? '/volume-down-fill.svg' : ''}
                            ${volume >= 60 ? '/volume-up-fill.svg' : ''}    
                        `}
                        alt="Volume"
                    />
                </div>
                <img id="x" src="/x.svg" alt="Fechar" onClick={toggleHidden}/>
            </div>
            <audio 
                src={currentEpisode?.url} 
                ref={audioRef} 
                onEnded={handleEpisodeEnded} 
                onPlay={() => setPlayingState(true)} 
                onPause={() => setPlayingState(false)}
                onLoadedMetadata={setupProgressListener}
            />
        </div>
    )
}