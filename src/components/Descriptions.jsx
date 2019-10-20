import React from 'react';

export default function Descriptions(props) {
  console.log(props)
  return (
    <div>
      {
        props.agencies.map(agency => {
          console.log(agency)
          switch (agency.agency_id) {
            case '1146':
              return <p>The Access Board is an independent federal agency devoted to accessibility for people with disabilities. The Board develops and maintains design criteria for the built environment, transit vehicles, telecommunications equipment, and for electronic and information technology.</p>
              break;
            case '1136':
              return <p>The Administrative Conference of the United States is an independent federal agency dedicated to improving federal agency administrative processes and procedures.</p>
              break;
            case '1144':
              return <p>The Advisory Council on Historic Preservation encourages the preservation of historic properties across the nation.</p>
              break;
            default:
              return null
          };
        }
        )}
    </div>
  )
}









// export default function Poster(props) {

//   const showImage = () => {
//     switch (props.film.title) {
//       case 'Arrietty':
//         return <img src={arrietty} alt={props.film.id} />;
//       case 'Castle in the Sky':
//         return <img src={castle} alt={props.film.id} />;
//  default:
//         return null;
//    }
// }