import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Selector from './Selector'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { country: 'Not selected', expectancy: ''}
    this.changeCountry = this.changeCountry.bind(this)
  }
  changeCountry(newCountry, newExpectancy) {
    this.setState({
      country: newCountry,
      expectancy: newExpectancy 
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Choose your country</h1>
        </header>
        <div className="App-intro">
          <Selector country={this.state.country} expectancy={this.state.expectancy} onChange={this.changeCountry}/>
        </div>
      </div>
    );
  }
}

export default App;
