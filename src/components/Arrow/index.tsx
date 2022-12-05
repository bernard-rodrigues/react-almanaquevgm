import './styles.css'
import React from 'react'

export function Arrow(){
    function scrollToTop(){
        let rootElement = document.documentElement
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <img onClick={scrollToTop} id="arrow" src="/arrow-up-circle-fill.svg" alt="Voltar ao início"></img>
    )
}