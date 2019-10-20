import React from 'react';
// import { Link } from 'react-router-dom';

function AgencyList(props) {
  return (
    // The <div> below contains the drop-down menu that displays all the top tier agencies
    <div>
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