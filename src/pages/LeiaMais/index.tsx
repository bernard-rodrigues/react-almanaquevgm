import { useLocation } from 'react-router-dom';
import { EpisodeDetails } from "../../components/EpisodeDetails";
import { DetailsBanner } from "../../components/DetailsBanner";

export function LeiaMais(){
    const location = useLocation()
    
    return(
        <>
            <DetailsBanner 
                title={location.state.title}
                duration={location.state.duration}
                description={location.state.description}
                audio={location.state.audio}
                img={location.state.img}
                pubDate={location.state.pubDate}
            />
            <EpisodeDetails
                title={location.state.title}
                duration={location.state.duration}
                description={location.state.description}
                audio={location.state.audio}
                img={location.state.img}
                pubDate={location.state.pubDate}
            />
        </>
    )
}