import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import PlayerGrid from './components/PlayerGrid';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    players: ''
  }
  
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players/')
      .then(response => {
        console.log(response)
        this.setState({
          players: response.data
        })
      })
  }
  
  render () {
    return (
      <div>
        <Navbar />
        <PlayerGrid players={this.state.players} />
      </div>
    );

  }
}

export default App;
