import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import { getAgencies } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer';
import AgencyList from './components/AgencyList';
import Chart from './components/Chart';
import Descriptions from './components/Descriptions';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      agencies: [],
      agency_id:""
    }
  }

  async componentDidMount() {
    const agencies = await getAgencies();
    const agency_id = agencies.agency_id
    this.setState({
      agencies: agencies,
      agency_id: agency_id

    })
  }




  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <AgencyList agencies={this.state.agencies} />
          <Descriptions agencies={this.state.agencies} />
          <Chart />
        </main>
        <Footer />
      </div>

    );
  }
}
export default App;
