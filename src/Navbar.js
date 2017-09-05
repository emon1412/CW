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
      <div className="nav">
        <ul>
          <img src={logo} alt='logo' id="brand" />
          <li className="services"><a class="active" href="#">Services</a></li>
          <li className="book"><a href="#">Book</a></li>
          <li className="about"><a href="#">About</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
