import { usePlayer } from '../../contexts/PlayerContext'
import './styles.css'

import playIcon from '/play-fill.svg'

interface CardProps{
    title: string,
    duration: string,
    description: string,
    imageUrl: string,
    audio: string
}

export function EpisodeDetails(props: CardProps){
    const { play } = usePlayer()
    
    function formatHtml(props: CardProps){
        let html: string = `
            <h2 class="detailsTitle">${props.title}</h2>
            <p class="detailsDuration">${props.duration}</p>
            ${props.description}
        `
        return html
    }
    
    return (
        <div className="leiaMaisContainer" style={{"backgroundImage": `url(${props.imageUrl})`}}>    
            <div className="overlay">
                <button id="detailsPlayEpisode" className="playEpisode" onClick={() => play({title: props.title, url: props.audio, image: props.imageUrl})}>
                    <span>Reproduzir</span>
                    <img src={playIcon} alt="Play Icon" />
                </button>
                <div className="details" dangerouslySetInnerHTML={{__html: formatHtml(props)}}></div>
            </div>
        </div>
    )
}