import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {
  const data = [{title:"home",price:10},{title:"about",price:50},{title:"contact",price:60}]

  return (
    <>
     <Navbar title={data[0]["title"]} price={data[0]["price"]}/>
     <Navbar title={data[1]["title"]} price={data[1]["price"]}/>
     <Footer title={data[2]["title"]} price={data[2]["price"]}/>
    </>
  )
}

export default App
