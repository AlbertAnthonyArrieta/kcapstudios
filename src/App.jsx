import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Home />
    </>
  )
}

export default App
