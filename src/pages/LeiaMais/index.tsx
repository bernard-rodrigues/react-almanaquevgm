import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Line } from "../../components/Line"
import { usePlayer } from "../../contexts/PlayerContext";

import { useLocation } from 'react-router-dom';
import { EpisodeDetails } from "../../components/EpisodeDetails";

export function LeiaMais(){
    const { isHidden, toggleHidden } = usePlayer()

    const location = useLocation()
    
    useEffect(() => {
        console.log(isHidden)
    }, [])
    
    return(
        <>
            <Header />
            <Line />
            <EpisodeDetails 
                title={location.state.title}
                duration={location.state.duration}
                description={location.state.description}
                audio={location.state.audio}
                imageUrl={location.state.imageUrl}
            />
            <Line />
            <Footer />
        </>
    )
}