import { usePlayer } from '../../contexts/PlayerContext'
import { CardProps } from '../../types/types'
import './styles.css'

import playIcon from '/play-fill.svg'

export function EpisodeDetails(props: CardProps){
    const { play } = usePlayer()
    
    function formatHtml(props: CardProps){
        let html: string = `
            ${props.description}
        `
        return html
    }
    
    return (
        <>
            <div className="leiaMaisContainer">      
                <div className="detailsTitleContainer">
                    <div>
                        <h1>{props.title}</h1>
                        <span>{props.duration}</span>
                    </div>
                    <button id="detailsPlayEpisode" className="playEpisode" onClick={() => play({title: props.title, url: props.audio, image: props.imageUrl})}>
                        <span>Reproduzir</span>
                        <img src={playIcon} alt="Play Icon" />
                    </button>
                </div>
                <div className="details" dangerouslySetInnerHTML={{__html: formatHtml(props)}}></div>
            
            </div>
        </>
    )
}