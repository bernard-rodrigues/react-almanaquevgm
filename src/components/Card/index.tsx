import './styles.css'
import { durationFormat } from '../../utils/durationFormat'
import { usePlayer } from '../../contexts/PlayerContext'
import { useNavigate } from 'react-router-dom'

import playIcon from '/play-fill.svg'

interface CardProps{
    title: string,
    duration: string,
    description: string,
    imageUrl: string,
    audio: string
}

export function Card(props: CardProps){
    const { play } = usePlayer()

    const navigate = useNavigate()

    function toLeiaMais(title: string){
        navigate(`/leiamais/${title}`, {state: props})
        let rootElement = document.documentElement
        rootElement.scrollTo({
            top: 0,
        })
    }
    
    function shorter(description: string){
        let shortDescription: string
        if(description.split('\n')[0].length < 200){
            shortDescription = description.split('\n')[0] + '\n\n' + description.split('\n')[1]
        }else{
            shortDescription = description.split('\n')[0]
        }
        return shortDescription;
    }
    
    return(
        <div className="item">
            <img className="thumb" width="256" height="256" src={props.imageUrl} alt={props.title}/>
            <div>
                <h3 className="title">{props.title} ({durationFormat(props.duration)})</h3>
                <p className="description" dangerouslySetInnerHTML={{__html: shorter(props.description)}}></p>
                <div className="episodeOptions">
                    <button className="playEpisode" onClick={() => play({title: props.title, url: props.audio, image: props.imageUrl})}>
                        <span>Reproduzir</span>
                        <img src={playIcon} alt="Play Icon" />
                    </button>
                    <span className="leiaMais" onClick={()=>toLeiaMais(props.title)}>Leia mais...</span>
                </div>
            </div>
        </div>
    )}