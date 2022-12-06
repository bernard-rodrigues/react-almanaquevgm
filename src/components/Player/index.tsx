import { useEffect, useRef } from 'react';
import { usePlayer } from '../../contexts/PlayerContext';
import './styles.css'

export function Player(){
    const audioRef = useRef<HTMLAudioElement>(null);

    const {
        currentEpisode,
        isPlaying,
        setPlayingState,
        togglePlay,
        clearPlayerState,
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
    
    return(
        <div id="player">
            <div className="btns">
                <div className="backward iconBackward">
                    <img src="/fast-forward-circle-fill.svg" alt="Backward Button" />
                </div>
                <div className="playPause iconPlay" onClick={togglePlay}>
                    { isPlaying
                        ? <img src="/pause-circle-fill.svg" alt="Pause Button" />
                        : <img src="/play-circle-fill.svg" alt="Play Button" />
                    }
                </div>
                <div className="forward iconForward">
                    <img src="/fast-forward-circle-fill.svg" alt="Forward Button" />
                </div>
            </div>
            <div className="info">
                <div className="currentEpisode">{currentEpisode?.title}</div>
                <div className="timer">00:00</div>
            </div>
            <audio 
                src={currentEpisode?.url} 
                ref={audioRef} 
                onEnded={handleEpisodeEnded} 
                onPlay={() => setPlayingState(true)} 
                onPause={() => setPlayingState(false)}
            />
        </div>
    )
}