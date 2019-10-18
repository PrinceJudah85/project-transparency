import axios from 'axios';

export const getAgencies = async function () {
  const response = await axios.get("https://api.usaspending.gov/api/v2/references/toptier_agencies/")
  return response.data.results

};

// export const getGlossary = async function () {
//   const response = await axios.get("https://api.usaspending.gov/api/v2/references/glossary/")
//   return response.data.data.results

// }