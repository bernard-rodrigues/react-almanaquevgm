import { Menu } from '../Menu'
import { Title } from '../Title'
import './styles.css'

export function Header(){
    return (
        <div id="header">
            <Title />
            <Menu />
        </div>
    )
}