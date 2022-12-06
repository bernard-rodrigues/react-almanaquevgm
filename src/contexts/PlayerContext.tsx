import { createContext, ReactNode, useContext, useState } from "react";

interface Episode{
    title: string,
    url: string,
    image: string
}

interface PlayerContextData{
    currentEpisode: Episode | null,
    isPlaying: boolean,
    isHidden: boolean,
    play: (episode: Episode) => void,
    setPlayingState: (state: boolean) => void,
    togglePlay: () => void,
    clearPlayerState: () => void,
    toggleHidden: () => void
}

export const PlayerContext = createContext({} as PlayerContextData);

interface PlayerContextProviderProps{
    children: ReactNode
}

export function PlayerContextProvider({children}: PlayerContextProviderProps){
    const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHidden, setIsHidden] = useState(true)

    function play(episode: Episode){
        setCurrentEpisode(episode);
        setIsPlaying(true);
        setIsHidden(false);
    }

    function togglePlay(){
        setIsPlaying(!isPlaying);
    }

    function setPlayingState(state: boolean){
        setIsPlaying(state);
    }

    function clearPlayerState(){
        setCurrentEpisode(null);
    }

    function toggleHidden(){
        setIsHidden(true);
        setIsPlaying(false)
    }

    return(
        <PlayerContext.Provider
            value={{
                currentEpisode,
                isPlaying,
                isHidden,
                play,
                setPlayingState,
                togglePlay,
                clearPlayerState,
                toggleHidden
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => {
    return useContext(PlayerContext)
}