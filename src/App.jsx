import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Header } from './Header/Header'
import { Home } from './Home/Home'
function App() {
  return ( <>
  <Router>
    <Header/>
    <Routes>
    <Route path={'/'} element ={ <Home /> } />
    </Routes>
  </Router>
  </>
    // <div className='text-4xl font-bold text-yellow-400 '>App</div>
  )
}


export default App