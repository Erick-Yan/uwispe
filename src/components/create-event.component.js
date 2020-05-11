import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class SubmitEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      eventname: '',
      description: '',
      date: new Date()
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeEmail(e) {
      this.setState({
          email: e.target.value
      })
  }
  
  onChangeEventName(e) {
    this.setState({
        eventname: e.target.value
    })
}

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      username: this.state.username,
      email: this.state.email,
      eventname: this.state.eventname,
      description: this.state.description,
      date: this.state.date
    }

    console.log(event);

    axios.post('http://localhost:5000/events', event)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Recommend an Event</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Full Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>

        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>

        <div className="form-group"> 
          <label>Event Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.eventname}
              onChange={this.onChangeEventName}
              />
        </div>

        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Submit Event" className="btn btn-info" />
        </div>
      </form>
    </div>
    )
  }
}