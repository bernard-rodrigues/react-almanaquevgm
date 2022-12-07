import { useEffect, useState } from 'react'

import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Line } from '../../components/Line'
import { Player } from '../../components/Player'
import { Arrow } from '../../components/Arrow'

interface episodeData{
  img: string,
  title: string,
  duration: string, 
  description: string,
  audio: string
}

export function Home() {
  const [episodeList, setEpisodeList] = useState<episodeData[]>([])

  useEffect(() => {

    const RSS_URL = import.meta.env.VITE_RSS_URL

    fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data => {

      const items = data.querySelectorAll("item");

      items.forEach(item => {

        setEpisodeList(currentList => [...currentList, {
          img: item.querySelector("image")?.getAttribute("href")!,
          title: item.querySelector("title")?.textContent!,
          duration: item.querySelector("duration")?.textContent!,
          description: item.querySelector("description")?.textContent!,
          audio:item.querySelector("enclosure")?.getAttribute('url')!
        }])
      })
    })
  }, [])
  
  return (
    <>  
      <Header/>
      <Line/>
      <main>
        {episodeList.map(episode => <Card 
          key={episode.audio} 
          title={episode.title}
          duration={episode.duration}
          description={episode.description} 
          imageUrl={episode.img}
          audio={episode.audio}
        />)}
        <Arrow />
      </main>
      <Line />
      <Footer />
      <Player />
    </>
  )
}
