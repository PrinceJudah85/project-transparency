import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import { getAgencies } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer';
import AgencyList from './components/AgencyList';
import Chart from './components/Chart';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      agencies: [],
      // agency_name: "",
      // budget_authority_amount:"",
      // percentage_of_total_budget:""

    }
  }
  async componentDidMount() {
    const agencies = await getAgencies();
    this.setState({ agencies })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <AgencyList agencies={this.state.agencies} />
          <Chart />
        </main>
        <Footer />
      </div>

    );
  }
}
export default App;
