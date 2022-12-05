import { Menu } from '../Menu'
import { Title } from '../Title'
import './styles.css'

export function Header(){
    return (
        <header id="header">
            <Title />
            <Menu />
        </header>
    )
}