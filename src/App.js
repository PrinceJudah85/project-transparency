import React from 'react';
import './App.css';
import { getAgencies } from './services/api-helper';
import TitlePage from './components/TitlePage';
import { Route } from 'react-router-dom';
import Main from './components/Main'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      agencies: [],
      value: ''
    }
  }

  async componentDidMount() {
    const agencies = await getAgencies();
    console.log(agencies)
    this.setState({ agencies })
  }

  handleChange = (event) => {
    let value = event.target.value
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div className="app">
        <main>
          <Route exact path='/' render={() => <TitlePage />} />
          <Route path='/main' render={() => <Main
            agencies={this.state.agencies}
            handleChange={this.handleChange}
            value={this.state.value}
          />} />
        </main>
      </div>
    );
  }
}
export default App;
