import React from 'react';
import ReactSvgPieChart from "react-svg-piechart";
import AgencyList from './AgencyList';
// import { Link } from 'react-router-dom';

const makeRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export default function Chart(props) {
  let data;
  if (props.value === '') {
    data = props.agencies.map(agency => ({
      title: agency.agency_name,
      value: agency.budget_authority_amount,
      color: makeRandomColor()
    }))
  } else {
    const currentAgency = props.agencies.find(agency => agency.agency_id === parseInt(props.value))
    data = [
      {
        title: currentAgency.agency_name,
        value: currentAgency.budget_authority_amount,
        color: "#ebcd09"
      },
      {
        title: "Total",
        value: currentAgency.current_total_budget_authority_amount,
        color: "#BBBBBB"
      }
    ]
  }





  return (

    // const pieChart = () => {
    <ReactSvgPieChart
      data={data}
    // If you need expand on hover (or touch) effect
    // expandOnHover={}
    // If you need custom behavior when sector is hovered (or touched)
    />

  )
}





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



//   getTotal = () => {
//     this.props.agencies.map(budget => {
//       this.setState(prevState => ({
//           total: prevState.total + budget.budget_authority_amount,
//         }))
//     })
//     console.log(this.state.total);
//   }

