import { useState } from 'react'
import './index.css'
import './App.css'
import SideBar from './pages/SideBar'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    {/* <Navbar/> */}
    <SideBar/>
    <Home/>
     
    </>
  )
}

export default App
