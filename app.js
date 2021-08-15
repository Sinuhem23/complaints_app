// fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency_name=NYPD');
//   .then((response) => response.json())
//   .then((data) => displayData(data));
// console.log(data.agency);

function displayData(d) {
  console.log(d);
  // d.split('');
}
// Looking for
// borough
// descriptor (which says what kind of complaint was made)
// agency: "NYPD" (because we only want complaints that were handled by the police department)
// resolution_description (which says how the police handled the complaint)

// Brooklyn
function bk() {
  let createNewParagraph = document.createElement('p');
  fetch(
    'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN'
  )
    // 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?$$app_token=6eJSL7hHcdnJpiVejhYdKkXR1'

    .then((response) => {
      if (!response.ok) {
        throw Error('Error');
      }
      return response.json();
    })
    .then((data) => {
      if ((data = data.filter((data) => data.agency === 'NYPD'))) {
        data.map((data) => {
          document.querySelector('#description').append(data.descriptor);
          console.log(data.descriptor);
        });

        // data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  // displayData(data));
}

// // Manhattan
// fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN')
//   .then((response) => response.json())
//   .then((data) => displayData(data));

// // Queens
// fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS')
//   .then((response) => response.json())
//   .then((data) => displayData(data));

// // Bronx
// fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX')
//   .then((response) => response.json())
//   .then((data) => displayData(data));

// // Staten Island
// fetch(
//   'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATENISLAND'
// )
//   .then((response) => response.json())
//   .then((data) => displayData(data));
