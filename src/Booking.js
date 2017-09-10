import React from 'react'

class Booking extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <form>
          <div className="form-group">
            <label className="control-label">Name</label>
            <input
              value={this.state.name}
              onChange={this.onChange}
              type="text"
              name="name"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-large">
              Book
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Booking
