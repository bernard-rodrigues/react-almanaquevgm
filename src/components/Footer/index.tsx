import { usePlayer } from '../../contexts/PlayerContext'
import { Social } from '../Social'
import { Title } from '../Title'
import './styles.css'

export function Footer(){
    const { isHidden } = usePlayer()
    
    return(
        <footer className={ isHidden ? "" : "bigger" }>
            <Title />
            <Social />
        </footer>
    )
}