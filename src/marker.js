const mapboxgl = require("mapbox-gl");


function buildMarker(backgroundImg, type, coord) {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${backgroundImg})`;
    console.log(backgroundImg)
    let newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coord)
    newMarker.type = type;
    return newMarker
    
}

module.exports = buildMarker;

