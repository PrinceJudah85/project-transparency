import React from 'react';
import CurrencyFormat from 'react-currency-format';

export default function AgencyList(props) {
  console.log(props.value)
  return (
    <div id="agency-select">
      <h3 id="agency-info"> Below is a list of Top-tier federal agencies of whom make-up a large
      portion of the federal government and on the right is a chart that highlights their
      individual portion of the entire budget authority for the year.<br /> <span id="highlighter">Hover over different slices on chart to reveal Agency Name</span> </h3>
      <select onChange={props.handleChange} autoFocus='autofocus' defaultValue='unselected' className='agency-list'>
        <option disabled value='unselected'>Choose an Agency</option>
        {props.agencies.map(agency => (
          < option value={agency.agency_id} key={agency.agency_id} id={agency.agency_id} > {agency.agency_name}</option>
        ))}
      </select>
      {/* STUDY THE TERNARY BELOW ---- Kudos to Night Brian for helping me with this*/}
      {!props.value ?
        <div>
        </div>
        :
        props.agencies.map(agency => (
          (agency.agency_id === parseInt(props.value)) &&
          <h4>Budget Authority Amount:
            <CurrencyFormat
              value={agency.budget_authority_amount}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'} />
          </h4>
        ))}
    </div >
  )
}


