import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Carosuel from './component/carousel'


export default function App() {
  return (
    <div className="App">
    <Navbar />
    <Carosuel/>
    <Footer/>
    {/* Other components */}
    </div>
  )
}

