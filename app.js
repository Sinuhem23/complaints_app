fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
  .then((response) => response.json())
  .then((data) => displayData(data));

function displayData(d) {
  console.log(d);
  d.split('');
}
// Looking for
// borough
// descriptor (which says what kind of complaint was made)
// agency: "NYPD" (because we only want complaints that were handled by the police department)
// resolution_description (which says how the police handled the complaint)
