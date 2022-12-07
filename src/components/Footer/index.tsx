import { usePlayer } from '../../contexts/PlayerContext'
import { Social } from '../Social'
import './styles.css'

import logoBranco from '/LogoBranco.png'

export function Footer(){
    const { isHidden } = usePlayer()
    
    return(
        <footer className={ isHidden ? "" : "bigger" }>
            <div className="footerContainer">
                <img src={logoBranco} alt="Logo Branco" />
                <Social />
            </div>
        </footer>
    )
}