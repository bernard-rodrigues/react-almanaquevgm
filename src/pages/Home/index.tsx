import { useEffect, useState } from 'react'
import { Banner } from '../../components/Banner'

import { Card } from '../../components/Card'

import { episodeData } from '../../types/types'

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
          pubDate: item.querySelector("pubDate")?.textContent!,
          duration: item.querySelector("duration")?.textContent!,
          description: item.querySelector("description")?.textContent!,
          audio:item.querySelector("enclosure")?.getAttribute('url')!
        }])
      })
    })
  }, [])
  
  return (
    <>
      <Banner />
      {episodeList.map(episode => <Card 
        key={episode.audio} 
        title={episode.title}
        duration={episode.duration}
        pubDate={episode.pubDate}
        description={episode.description} 
        img={episode.img}
        audio={episode.audio}
      />)}
    </>
  )
}
