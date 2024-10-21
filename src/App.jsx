import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderContainers from './containers/HeaderContainers'
import HomeContainer from './containers/HomeContainer'

function App() {

  return (
    <>
      <HeaderContainers/>
      <HomeContainer/>
    </>
  )
}

export default App
