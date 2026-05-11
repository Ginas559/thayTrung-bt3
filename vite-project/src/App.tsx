import { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/test')
      .then(result => this.setState({ message: result.data.message }))
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
      </div>
    )
  }
}

export default App;