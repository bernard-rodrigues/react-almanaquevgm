import { useState } from 'react'
import { usePlayer } from '../../contexts/PlayerContext'
import './styles.css'

import arrow from '/arrow-up-circle-fill.svg'

export function Arrow(){
    const [showArrow, setShowArrow] = useState(false)
    
    const { isHidden } = usePlayer()

    function scrollToTop(){
        let rootElement = document.documentElement
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function toggleArrow(){
        if(window.scrollY > 80){
            setShowArrow(true)
        }else{
            setShowArrow(false)
        }
    }

    window.addEventListener('scroll', toggleArrow)
    
    return (
        <img onClick={scrollToTop} id="arrow" className={`${isHidden ? "" : "arrowUp"} ${showArrow ? "showArrow" : ""}`} src={arrow} alt="Voltar ao início"></img>
    )
}