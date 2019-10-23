import React from 'react';
import AgencyList from './AgencyList';
import Descriptions from './Descriptions';
import Chart from './Chart';
import Header from './Header';
import Footer from './Footer';

export default function Main(props) {
  return (
    <div id="main-page">
      <Header />
      <div id="grid-this">
        <div id="left-side">
          <AgencyList agencies={props.agencies} handleChange={props.handleChange} value={props.value} />
          <Descriptions handleChange={props.handleChange} value={props.value} />
        </div>
        <div id="right-side">
          <Chart value={props.value} agencies={props.agencies} />
        </div>
      </div>
      <Footer />
    </div>
  )
}