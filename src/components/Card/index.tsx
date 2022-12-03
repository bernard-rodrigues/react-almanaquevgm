import './styles.css'

interface CardProps{
    title: string,
    description: string,
    imageUrl: string
}

export function Card({title, description, imageUrl}: CardProps){
    return(
        <div className="item">
            <img className="thumb" width="256" height="256" src={imageUrl} />
            <div>
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <div className="episodeOptions">
                    <button className="playEpisode">Reproduzir</button>
                    <a href="#" className="leiaMais">Leia mais...</a>
                </div>
            </div>
        </div>
    )}