import React, { useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'

const App = () => {
  const [darkTheme, setDarkTeme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTeme={setDarkTeme}/>
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App
