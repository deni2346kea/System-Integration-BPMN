'use strict';

/********************************/
/*  jQuery CLICK EVENTS BELLOW  */
/********************************/

$("#getUser").click(() => {
  getUsers();
});


/********************************/
/*      FUNCTIONS BELLOW        */
/********************************/



// get geo coordinates, soap
async function getCoordinates() {
//    get smth from soap server
    if (true) {
        getWeather(lat, lon);
    }
}

async function getWeather(lat, lon) {
    const weather ={
        lat: lat,
        lon: lon
    };
    $.ajax({
        type: "POST",
        data: weather,
        dataType: "json",
        url: "http://localhost:3000/api/weather/",
        success: (data) => {
        console.log(data);
}
})
}

// GET ALL USERS
async function getUsers() {
  const city = $("#citySearch").val();
  let coordinates;
  console.log(city);
  $.getJSON("http://localhost:3030/soap/" + city,
      (data) => {
          console.log(data.return.lat);
          coordinates = data.return;

            const weather ={
                lat: coordinates.lat,
                lon: coordinates.lon
            };

            $.ajax({
                type: "POST",
                data: weather,
                dataType: "json",
                url: "http://localhost:3000/api/weather/",
                success: (data) => {
                console.log(data);
            }
        })
  });
}



function hideFunction() {
    var x = document.getElementById("first");
    if (x.style.display === "none") {

    } else {
        x.style.display = "none";
    }
}


function hide() {
    var x = document.getElementById("second");
    if (x.style.display === "none") {

    } else {
        x.style.display = "none";
    }

}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("getUser");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
