import './styles.css'
import logo from '/Logo.png'

import { Link } from 'react-router-dom'

export function Title(){
    return (
        <Link to="/">
            <div className="logoContainer">
                <img src={logo} alt="Logo Almanaque VGM" />
                <h1>Almanaque VGM</h1>
            </div>
        </Link>
        
    )
}