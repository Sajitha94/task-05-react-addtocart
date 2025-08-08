import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Banner from './components/banner'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Header/>
        <Banner/>
        <Card/>
      </div>
    </>
  )
}

export default App
