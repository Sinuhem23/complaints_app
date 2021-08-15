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
      if ((data = data.filter((data) => data.agency === 'DSNY'))) {
        let createTag = document.createElement('div');
        let targetId = document.getElementById('div_holder');

        let d = data.descriptor;

        for (i = 0; i < data.length; i++) {
          let createTag = document.createElement('p');

          // createTag.textContent = data[i];
          // targetId.appendChild(createTag);

          targetId.appendChild(createTag).textContent = data[i].descriptor;
        }

        // data.forEach((data) => {
        //   targetId.appendChild(createTag).textContent = data.descriptor;
        // });

        console.log('appended');
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
