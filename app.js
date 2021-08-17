const list = document.querySelector('.list');
let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('#search');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let inputValue = input.value;
    let buttonValue = btn.value;
    if (!inputValue) {
      // Setting 10 to default if no input
      inputValue = 10;
    }
    nypdComplaints(inputValue, buttonValue);
  });
});

function nypdComplaints(value, city) {
  list.innerHTML = '';
  fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data
        // Takes only NYPD complaints
        .filter((filterByAgency) => filterByAgency.agency === 'NYPD')
        .filter((filterByCity) => filterByCity.borough === city.toUpperCase())
        .forEach((data, i) => {
          if (value > i) {
            list.insertAdjacentHTML(
              'afterbegin',
              `<div class="descriptor-container">
                    <li class="item">${data.descriptor}</li>
                    <button class="response">What did the police do</button>
                </div>
                <div class="response-container">
                    <p class="resolution-Text">${
                      data.resolution_description
                        ? data.resolution_description
                        : 'Complaint not resolved yet'
                    }</p>
                </div>
                `
            );

            let nypdResponse = document.querySelector('.response');
            let response = document.querySelector('.response-container');
            nypdResponse.addEventListener('click', () => {
              response.classList.remove('response-container');
            });

            nypdResponse.addEventListener('mouseout', () => {
              setTimeout(() => {
                response.classList.add('response-container');
              }, 500);
            });
          }
        });
    });
}
