import React from 'react';
import ReactSvgPieChart from "react-svg-piechart";

const makeRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
// Shoutout to David for helping me with the filtering and conditional rendering below. 
export default function Chart(props) {
  let data;
  if (props.value === '') {
    data = props.agencies.filter(agency => agency.budget_authority_amount > 100000000000).map(agency => ({
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
        title: "Total Budget",
        value: currentAgency.current_total_budget_authority_amount,
        color: "#7a776d"
      }
    ]
  }

  return (
    <div id="chart-side">
      <p id="restrictions">Agencies with a budget less than $40 billion won't render</p>


      <ReactSvgPieChart
        data={data}
        expandOnHover={true}
        // If you need expand on hover (or touch) effect
        // expandedIndex={props.agencies.find(agency => agency.agency_id === parseInt(props.value)
        // If you need custom behavior when sector is hovered (or touched)
        // onSectorHover={(data, index, event) => {
        //   const currentAgency = props.agencies.find(agency => agency.agency_id === parseInt(props.value))
        //   if (currentAgency.agency_name === data.title) {
        //     event.target
        //   } 
        // }}
        transitionDuration = '1s'
      />
    </div>
  )
}