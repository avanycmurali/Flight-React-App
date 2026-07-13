import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import AddFlight from './components/AddFlight'
import ViewFlight from './components/ViewFlight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AddFlight/>
      <ViewFlight/>
    </>
  )
}

export default App
