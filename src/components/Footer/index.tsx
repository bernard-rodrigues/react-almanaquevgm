import { usePlayer } from '../../contexts/PlayerContext'
import { Social } from '../Social'
import { Title } from '../Title'
import './styles.css'

export function Footer(){
    const { isHidden } = usePlayer()
    
    return(
        <footer className={ isHidden ? "" : "bigger" }>
            <div className="footerContainer">
                <img src="/LogoBranco.png" alt="Logo Branco" />
                <Social />
            </div>
        </footer>
    )
}