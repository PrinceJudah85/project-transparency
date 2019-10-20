import React from 'react';
// import { Link } from 'react-router-dom';

function AgencyList(props) {
  return (
    // The <div> below contains the drop-down menu <select> that displays all the top tier agencies
    <div>
      <h5 id="agency-info"> Below is a list of Top-tier federal agencies of whom make-up a large
      portion of the federal government and on the right is a chart that highlights their
      individual portion of the entire budget authority for the year. </h5>
      <select autoFocus='autofocus' defaultValue='unselected' className='agency-list'>
        <option disabled value='unselected'>Choose an Agency</option>
        {props.agencies.map(agency => (
          <option key={agency.agency_id}>{agency.agency_name}</option>
        ))}
      </select>
    </div>
  )
}

export default AgencyList