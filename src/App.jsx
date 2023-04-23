import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Movielist from './components/Movielist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Filters />
        <Movielist />
      </div>
    </>
  )
}

export default App
