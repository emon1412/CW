import React from 'react'
import { DateField, Calendar } from 'react-date-picker'
import moment from 'moment'
import 'react-date-picker/index.css'

class Booking extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      date: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
    console.log(moment().format('YYYY-MM-DD'))
  }

  onDateChange (dateString, { dateMoment, timestamp }) {
    this.setState({
      date: dateString
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
            <label className="control-label">Email</label>
            <input
              value={this.state.name}
              onChange={this.onChange}
              type="text"
              name="name"
              className="form-control"
            />
          </div>

          <DateField dateFormat="YYYY-MM-DD">

          <Calendar
          dateFormat="YYYY-MM-DD"
          date={moment().format('YYYY-MM-DD')}
          onChange={this.onDateChange}
          />

          </DateField>
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
