import { usePlayer } from '../../contexts/PlayerContext'
import { episodeData } from '../../types/types'
import { convertGMT } from '../../utils/convertGMTtoBR'
import './styles.css'

import playIcon from '/play-fill.svg'

export function EpisodeDetails(props: episodeData){
    const { play } = usePlayer()
    
    function formatHtml(props: episodeData){
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
                        <span className="detailsPubDate">{convertGMT(props.pubDate)}</span>
                    </div>
                    <button id="detailsPlayEpisode" className="playEpisode" onClick={() => play({title: props.title, url: props.audio, image: props.img})}>
                        <span>Reproduzir</span>
                        <img src={playIcon} alt="Play Icon" />
                    </button>
                </div>
                <div className="details" dangerouslySetInnerHTML={{__html: formatHtml(props)}}></div>
            
            </div>
        </>
    )
}