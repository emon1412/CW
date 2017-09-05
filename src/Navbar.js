import React from 'react'
import logo from './images/customwash_logo_transparent.png'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <img src={logo} alt='logo' id="brand" />
        Navbar
      </div>
    )
  }
}

export default Navbar
