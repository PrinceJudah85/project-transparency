import React from 'react';
// import { Link } from 'react-router-dom';

export default function AgencyList(props) {

  return (
    <div id="agency-select">
      <h5 id="agency-info"> Below is a list of Top-tier federal agencies of whom make-up a large
      portion of the federal government and on the right is a chart that highlights their
      individual portion of the entire budget authority for the year. </h5>
      <select onChange={props.handleChange} autoFocus='autofocus' defaultValue='unselected' className='agency-list'>
        <option disabled value='unselected'>Choose an Agency</option>
        {props.agencies.map(agency => (
          < option value={agency.agency_id} key={agency.agency_id} id={agency.agency_id}>{agency.agency_name}</option>
        ))}
      </select>
    </div >
  )
}


