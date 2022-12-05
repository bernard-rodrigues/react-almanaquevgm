import './styles.css'

interface CardProps{
    title: string,
    duration: string,
    description: string,
    imageUrl: string
}

export function Card({title, description, imageUrl, duration}: CardProps){
    function shorter(description: string){
        let shortDescription: string
        if(description.split('\n')[0].length < 200){
            shortDescription = description.split('\n')[0] + '\n\n' + description.split('\n')[1]
        }else{
            shortDescription = description.split('\n')[0]
        }
        return shortDescription;
    }

    function durationFormat(duration: string){
        let dur: string[] = duration.split(':')
        if(dur[0] != '00'){
            duration = dur[0] + 'h' + dur[1] + 'min'
        }else{
            duration = dur[1] + 'min'
        }
        return duration
    }
    
    return(
        <div className="item">
            <img className="thumb" width="256" height="256" src={imageUrl} />
            <div>
                <h3 className="title">{title} ({durationFormat(duration)})</h3>
                <p className="description" dangerouslySetInnerHTML={{__html: shorter(description)}}></p>
                <div className="episodeOptions">
                    <button className="playEpisode">Reproduzir</button>
                    <a href="#" className="leiaMais">Leia mais...</a>
                </div>
            </div>
        </div>
    )}