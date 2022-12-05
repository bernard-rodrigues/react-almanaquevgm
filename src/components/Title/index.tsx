import './styles.css'
import logo from '/Logo.png'

export function Title(){
    return (
        <div className='logoContainer'>
            <img src={logo} alt="Logo Almanaque VGM" />
            <h1>Almanaque VGM</h1>
        </div>
    )
}