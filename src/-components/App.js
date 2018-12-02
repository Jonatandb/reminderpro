import React, { Component } from 'react';
import { connect } from "react-redux";
import { addReminder } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }
  
  reminders() {
    const { reminders } = this.props;
    return reminders && reminders.length > 0 ? (
      <ul>
        { reminders.map(r => <li key={r.id}>{r.text}</li>)}
      </ul>
    )
    : 
    <p>Add a todo!</p>
  }

  render() {
    return (
      <div>
        <h1>Reminder Pro</h1>
        <input placeholder="I have to..." onChange={event => this.setState({text: event.target.value})}/>
        <button type="button" onClick={() => this.addReminder()}>
          Add new reminder
        </button>
        {this.reminders()}
      </div>
    );
  }
}

export default connect( 
  state => ({ reminders: state})
  ,
  { addReminder }
)(App);