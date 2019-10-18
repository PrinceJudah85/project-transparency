import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import { getAgencies } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Chart from './components/Chart'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // agencyList: [],
      // agency_name: "",
      // budget_authority_amount:"",
      // percentage_of_total_budget:""

    }
  }

  agencyList = async () => {
    const agencies = await getAgencies();
    console.log(agencies)
  }



  render() {
    return (
      <div className="app">
        <Header />
        <Main agencyList={this.agencyList} />
        <Chart />
        <Footer />
      </div>

    );
  }
}
export default App;
