import { useState } from 'react'
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import comics from './components/comics.js';
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'

function App() {

  return (
    <>
      <Header />
      <Body comics = {comics} />
      <Footer />
    </>
  )
}

export default App
