import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetails from './pages/PokemonDetails'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
