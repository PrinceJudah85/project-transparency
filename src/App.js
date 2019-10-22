import React from 'react';
import './App.css';
import { getAgencies } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer';
import AgencyList from './components/AgencyList';
import Chart from './components/Chart';
import Descriptions from './components/Descriptions';
// import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      agencies: [],
      value: ''
      // agency_id: "",
    }
  }

  async componentDidMount() {
    const agencies = await getAgencies();
    // const agency_id = agencies[25].agency_id;
    console.log(agencies)
    this.setState({
      agencies: agencies,
      // agency_id: agency_id

    })
  }

  handleChange = (event) => {
    let value = event.target.value
    this.setState({value})
    console.log(value)
  }




  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <AgencyList agencies={this.state.agencies} handleChange={this.handleChange} />
          <Descriptions value={this.state.value} />
          <Chart
            agencies={this.state.agencies}
            value={this.state.value}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
