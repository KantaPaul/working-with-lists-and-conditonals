import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asdsad45', name: 'Pobon', age: 24},
      {id: 'fdgdfg45', name: 'Kanta', age: 28},
      {id: 'asdfdsf65', name: 'Paul', age: 29}
    ],
    showPerson: false
  }

  typingSwitcher = (event, id) => {

    let personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })

    let person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({
      persons: persons
    })

  }
  personHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  personRemove = (personIndex) => {
    let myPersons = this.state.persons;
    myPersons.splice(personIndex, 1)
    this.setState ({
      persons: myPersons      
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
        // <div className="person-wraper">
        //   <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        //   <Person onchage={this.typingSwitcher} name={this.state.persons[1].name} age={this.state.persons[0].age}/>
        //   <Person name={this.state.persons[2].name} age={this.state.persons[0].age}/>
        // </div>
        <div className="person-wraper">
          {this.state.persons.map((person, index) => {
            return (
              <Person 
              name={person.name} 
              age={person.age} 
              key={person.id}
              remove={() => this.personRemove(index)}
              onchage={(nameChange) => this.typingSwitcher(nameChange, person.id)}
              />
            )
          })}
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
        <p>
          {this.state.persons.length === 0 ? 'List is empty': `Total person ${this.state.persons.length}`}
        </p>
        {persons}

      </div>
    );
  }
}

export default App;
