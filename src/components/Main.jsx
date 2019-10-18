import React from 'react';
// import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <div>
      <button onClick={props.agencyList}>
        Get Data
      </button>
    </div>
  )
}

export default Main