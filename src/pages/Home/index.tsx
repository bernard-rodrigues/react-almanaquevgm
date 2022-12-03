import { useEffect, useState } from 'react'

import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Line } from '../../components/Line'

import './styles.css'

interface episodeData{
  img: string,
  title: string,
  duration: string, 
  description: string,
  shortDescription: string,
  audio: string
}

export function Home() {
  
  useEffect(() => {
    fetch('https://anchor.fm/s/3090da8c/podcast/rss')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data => {
      let mydata = data
    })
  }, [])
  
  const [episodeList, setEpisodeList] = useState([])
  
  return (
    <>
      <Header/>
      <Line/>
      {episodeList.map(episode => <Card key="" title="" description="" imageUrl=""/>)}
      <Line />
      <Footer />
    </>
  )
}
