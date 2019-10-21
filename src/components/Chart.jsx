import React from 'react';
import ReactSvgPieChart from "react-svg-piechart";
// import { Link } from 'react-router-dom';

const makeRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function Chart(props) {
  return (
    <div>
      
    </div>
  )
}

export default Chart

// {props.value === '' ? (
//   <PieChart
//     data={props.agencies.map(agency => ({
//       title: agency.agency_name,
//       value: agency.budget_authority_amount,
//       color: makeRandomColor()
//     }))}
//   />
// ) : (
//     <PieChart
//       data={props.agencies.map(agency => ({
//         title: agency.agency_name,
//         value: agency.budget_authority_amount,
//         color: agency.agency_id === parseInt(props.value) ? "gold" : "#BBBBBB"
//       }))}
//     />
//   )}