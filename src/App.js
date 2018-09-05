import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Pobon', age: 24},
      {name: 'Chandra', age: 28},
      {name: 'Paul', age: 29}
    ],
    showPerson: false
  }
  typingSwitcher = (event) => {
    this.setState({
      persons: [
        {name: 'Pobon', age: 24},
        {name: event.target.value, age: 28},
        {name: 'Paul', age: 29}
      ]
    })
  }
  personHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }
  render() {
    let button = {
      backgroundColor: 'white',
      padding: '15px 30px',
      border: '1px sold #333',
      color: '#333',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div className="person-wraper">
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person onchage={this.typingSwitcher} name={this.state.persons[1].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.personHandler} style={button}>{this.state.showPerson === true ? 'Hide Me' : 'Show Me'}</button>
        
        {/* {
          this.state.showPerson === true ? 
          <div className="person-wraper">
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person onchage={this.typingSwitcher} name={this.state.persons[1].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
          </div> : null
        } */}
        {persons}

      </div>
    );
  }
}

export default App;
