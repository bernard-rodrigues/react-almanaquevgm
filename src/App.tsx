import { Home } from './pages/Home'
import { LeiaMais } from './pages/LeiaMais'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { PlayerContextProvider } from './contexts/PlayerContext'
import { Header } from './components/Header'
import { Line } from './components/Line'
import { Arrow } from './components/Arrow'
import { Footer } from './components/Footer'
import { Player } from './components/Player'

export function App(){
    return(
        <PlayerContextProvider>
            <BrowserRouter>
                <Header />
                <Line />
                    <main>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/leiamais/:title' element={<LeiaMais />} />
                        </Routes>
                        <Arrow />
                    </main>
                <Line />
                <Footer />
                <Player />
            </BrowserRouter>
        </PlayerContextProvider>
    )
}