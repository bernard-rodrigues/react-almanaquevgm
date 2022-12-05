import { createContext, ReactNode, useContext, useState } from "react";

interface Episode{
    title: string,
    duration: number,
    url: string,
    img: string
}

interface PlayerContextData{
    currentEpisode: Episode | null,
    isPlaying: boolean,
    play: (episode: Episode) => void,
    setPlayingState: (state: boolean) => void,
    togglePlay: () => void,
    clearPlayerState: () => void
}

export const PlayerContext = createContext({} as PlayerContextData);

interface PlayerContextProviderProps{
    children: ReactNode
}

export function PlayerContextProvider({children}: PlayerContextProviderProps){
    const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function play(episode: Episode){
        setCurrentEpisode(episode);
        setIsPlaying(true);
    }

    function togglePlay(){
        setIsPlaying(!isPlaying)
    }

    function setPlayingState(state: boolean){
        setIsPlaying(state)
    }

    function clearPlayerState(){
        setCurrentEpisode(null)
    }

    return(
        <PlayerContext.Provider
            value={{
                currentEpisode,
                isPlaying,
                play,
                setPlayingState,
                togglePlay,
                clearPlayerState,

            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => {
    return useContext(PlayerContext)
}