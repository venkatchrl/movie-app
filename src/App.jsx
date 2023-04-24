
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import Movielist from './components/Movielist'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <Filters />
        <Movielist/>
      </div>
    </>
  )
}

export default App
