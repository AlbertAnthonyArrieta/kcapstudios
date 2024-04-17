import { useState, createContext } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ArtWork from './pages/Artwork.jsx'
import Cinematography from './pages/Cinematography.jsx'
import Photography from './pages/Photography.jsx'

export const ActiveLinkContext = createContext();

function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeLink, setActiveLink] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
    setActiveLink(page);
  }

  return (
    <>
      <ActiveLinkContext.Provider value={activeLink}>
        <Hero changePage={handlePageChange} />
      </ActiveLinkContext.Provider>

      {activePage === 'home' && <Home /> ? (
        <Home />
      ) : activePage === 'projects' && <Projects /> ? (
        <Projects />
      ) : activePage === 'photography' && <Photography /> ? (
        <Photography />
      ) : activePage === 'cinematography' && <Cinematography /> ? (
        <Cinematography />
      ) : activePage === 'artwork' && <ArtWork /> ? (
        <ArtWork />
      ) : (
        <PageNotFound />
      )
      }

    </>
  )
}

export default App
