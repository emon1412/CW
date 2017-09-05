import React from 'react'
import menu from './shared/menu.js'

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    console.log(menu)
    return (
      <div>
      {menu.map(item => {
        return (
          <div>
            <h2>{item.name}</h2>
            <div>Price: {item.price.standard}</div>
            <div>{item.price.description}</div>
            <ul>
              {item.details.map(el => {
                return (
                  <li>{el}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
      </div>
    )
  }
}

export default Menu
