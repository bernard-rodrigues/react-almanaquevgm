import './styles.css'

interface CardProps{
    title: string,
    duration: string,
    description: string,
    imageUrl: string,
    audio: string
}

export function EpisodeDetails(props: CardProps){
    return (
        <div className="leiaMaisContainer" style={{"backgroundImage": `url(${props.imageUrl})`}}>    
            <div className="overlay"></div>
        </div>
    )
}