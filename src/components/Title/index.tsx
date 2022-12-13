import './styles.scss'
import logo from '/Logo.png'

import { useNavigate } from 'react-router-dom'

export function Title(){
    const navigate = useNavigate()

    function toHome(){
        navigate("/")
    }

    return (
        <div className="logoContainer" onClick={toHome}>
            <img src={logo} alt="Logo Almanaque VGM" />
            <h1>Almanaque VGM</h1>
        </div>
    )
}