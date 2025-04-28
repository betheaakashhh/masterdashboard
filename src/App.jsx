import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Approutes from '../routes/Approutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
      <Navbar/>
      <div className="main">
        <Sidebar/>
        <div className="content">
          <Approutes/>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
