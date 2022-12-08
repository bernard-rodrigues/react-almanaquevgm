import { useEffect } from "react";
import { usePlayer } from "../../contexts/PlayerContext";

import { useLocation } from 'react-router-dom';
import { EpisodeDetails } from "../../components/EpisodeDetails";
import { DetailsBanner } from "../../components/DetailsBanner";

export function LeiaMais(){
    const { isHidden, toggleHidden } = usePlayer()

    const location = useLocation()
    
    useEffect(() => {
        console.log(isHidden)
    }, [])
    
    return(
        <>
            <DetailsBanner 
                title={location.state.title}
                duration={location.state.duration}
                description={location.state.description}
                audio={location.state.audio}
                imageUrl={location.state.imageUrl}
            />
            <EpisodeDetails
                title={location.state.title}
                duration={location.state.duration}
                description={location.state.description}
                audio={location.state.audio}
                imageUrl={location.state.imageUrl}
            />
        </>
    )
}