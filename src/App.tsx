import { Home } from './pages/Home'
import { LeiaMais } from './pages/LeiaMais'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { PlayerContextProvider } from './contexts/PlayerContext'

export function App(){
    return(
        <PlayerContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/leiamais/:title' element={<LeiaMais />} />
                </Routes>
            </BrowserRouter>
        </PlayerContextProvider>
    )
}