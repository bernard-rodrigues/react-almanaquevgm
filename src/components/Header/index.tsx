import { Menu } from '../Menu'
import { Title } from '../Title'
import './styles.scss'

export function Header(){
    return (
        <header id="header">
            <Title />
            <Menu />
        </header>
    )
}