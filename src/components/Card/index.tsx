import './styles.css'
import { durationFormat } from '../../utils/durationFormat'

interface CardProps{
    title: string,
    duration: string,
    description: string,
    imageUrl: string,
    audio: string
}

export function Card({title, description, imageUrl, duration, audio}: CardProps){
    function shorter(description: string){
        let shortDescription: string
        if(description.split('\n')[0].length < 200){
            shortDescription = description.split('\n')[0] + '\n\n' + description.split('\n')[1]
        }else{
            shortDescription = description.split('\n')[0]
        }
        return shortDescription;
    }

    function playEpisode(audio: string){
        console.log(audio)
    }
    
    return(
        <div className="item">
            <img className="thumb" width="256" height="256" src={imageUrl} alt={title}/>
            <div>
                <h3 className="title">{title} ({durationFormat(duration)})</h3>
                <p className="description" dangerouslySetInnerHTML={{__html: shorter(description)}}></p>
                <div className="episodeOptions">
                    <button className="playEpisode" onClick={() => playEpisode(audio)}>Reproduzir</button>
                    <a href="#" className="leiaMais">Leia mais...</a>
                </div>
            </div>
        </div>
    )}