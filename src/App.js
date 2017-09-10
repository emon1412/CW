import React from 'react'
import Navbar from './Navbar.js'
import Booking from './Booking.js'
import Landing from './Landing.js'
import Menu from './Menu.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Menu />
      <Booking />
    </div>
  )
}

export default App;
