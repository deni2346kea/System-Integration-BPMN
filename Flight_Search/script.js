'use strict';

let url = 'https://api.skypicker.com/';
let arrayOfFlights = [];

$('#searchFlights').click(() => {
  // get input
  const startPlace = $('#inputFrom').val();
  const destination = $('#inputTo').val();
  const dateFrom = $('#dateFrom').val();
  const dateTo = $('#dateTo').val();

  searchFlightFunction({dateFrom: dateFrom, dateTo: dateTo, from: startPlace, dest: destination});
});

async function searchFlightFunction({dest, from, dateTo, dateFrom}) {
  let comUrl = url + `flights?flyFrom=${from}&to=${dest}&dateFrom=18/06/2018&dateTo=25/06/2018&partner=picky`;
  console.log(comUrl);
  $.get(comUrl, (data) => {
    displayData(data);
  });
}

async function displayData(data) {
  // hiding previous div - angular shit up in this biatch!
  $('.searchFlightsDiv').hide();
  $('.seeFlightsDiv').show();
  // displaying the data
  const dataArray = data.data;
  for (let i = 0; i < 150; i++) {
    console.log(dataArray[i]);
    // get relevant info about the flight
    const cityFrom = dataArray[i].cityFrom;
    const cityTo = dataArray[i].cityTo;
    const duration = dataArray[i].fly_duration;
    const deep_link = dataArray[i].deep_link;
    const booking_token = dataArray[i].booking_token;
    const distance = dataArray[i].distance;
    const price = dataArray[i].price;

    let ulString = '<ul>';
    ulString = ulString + `<li>From  ${cityFrom}</li>`;
    ulString = ulString + `<li>To  ${cityTo}</li>`;
    ulString = ulString + `<li>Flight duration  ${duration}</li>`;
    ulString = ulString + `<li>Link  <a target="_blank" href="${deep_link}">www.kiwi.com</a></li>`;
    ulString = ulString + `<li>Booking token  ${booking_token}</li>`;
    ulString = ulString + `<li>Distance  ${distance}km</li>`;
    ulString = ulString + `<li>Price  ${price}€</li>`;
    ulString = ulString + '</ul>';
    // add flight to ul
    $('.seeFlightsDiv').append(ulString);

    let button = `<button onclick="bookFlight(${i.toString()})" type="button" id="${i.toString()}">Book This Flight</button>`;
    // add button for flight
    $('.seeFlightsDiv').append(button);

    // save flight inside arrayOfFlights
    arrayOfFlights.push({
      cityFrom: cityFrom,
      cityTo: cityTo,
      duration: duration,
      deep_link: deep_link,
      booking_token: booking_token,
      distance: distance,
      price: price
    });
    // flight position in arrayOfFlights is the same as the button id
  }
}

async function bookFlight(flightId) {
  // get flight info
  const flight = arrayOfFlights[flightId];
  // do smth with this flight
}
