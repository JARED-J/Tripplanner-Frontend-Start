console.log("This works");
const buildMarker = require('./marker')
const mapboxgl = require("mapbox-gl");

const iconUrls = {
    activityImg: "http://i.imgur.com/WbMOfMl.png",
    hotelImg: "http://i.imgur.com/D9574Cu.png",
    restaurantImg: "http://i.imgur.com/cqR6pUI.png"
}

mapboxgl.accessToken = "pk.eyJ1IjoiamFyZWRqYWNrc29uIiwiYSI6ImNqZDF3YnJmZjBsZHMycXBhaWk2OTI1ZjIifQ.F1iuEnr-8JFpEhpxzCQWDA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

let activityMarker = buildMarker(iconUrls.activityImg, "activity", [-74.009151, 40.705086])
let hotelMarker = buildMarker(iconUrls.hotelImg, "hotel", [-74.00, 40.727])
let restaurantMarker = buildMarker(iconUrls.restaurantImg, "restaurant", [-74.01, 40.70086])
console.log(activityMarker)

let activeMarkers = [];
activeMarkers.push(activityMarker);
activeMarkers.push(hotelMarker);
activeMarkers.push(restaurantMarker);

function addAll () {
    activeMarkers.forEach(marker => {
        marker.addTo(map);
    });
}

// Display all markers by default
addAll();
// activityMarker.addTo(map);
// hotelMarker.addTo(map);
// restaurantMarker.addTo(map);

// Filters
$('#activityBtn').on('click', function () {
    activeMarkers.forEach(marker => {
        if (marker.type !== 'activity') {
            marker.remove();
        } else {
            marker.addTo(map);
        }
    })
});

$('#hotelBtn').on('click', function () {
    activeMarkers.forEach(marker => {
        if (marker.type !== 'hotel') {
            marker.remove();
        } else {
            marker.addTo(map);
        }
    })
});

$('#restaurantBtn').on('click', function () {
    activeMarkers.forEach(marker => {
        if (marker.type !== 'restaurant') {
            marker.remove();
        } else {
            marker.addTo(map);
        }
    })
});