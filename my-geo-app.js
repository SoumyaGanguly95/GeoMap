// initialize Leaflet
var map = L.map("map").setView([7, 51], 10);

// add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({ imperial: true, metric: true }).addTo(map);

// show a marker on the map
L.marker({ lon: 7.62571, lat: 51.96236 })
  .addTo(map)
  .bindPopup("Münster, Germany")
  .openPopup();

// show markers for protected sites
var firstProtectedSiteGeometry = L.polygon([
  [52.0188, 7.6638],
  [52.0183, 7.6513],
  [52.0116, 7.651],
  [52.0109, 7.6554],
  [52.0134, 7.6571],
  [52.0115, 7.6616],
  [52.0188, 7.6638],
])
  .addTo(map)
  .bindPopup("Rieselfelder")
  .openPopup();

var secondProtectedSiteGeometry = L.polygon([
  [51.9137, 7.697],
  [51.9112, 7.6972],
  [51.9112, 7.7002],
  [51.9129, 7.6996],
  [51.9137, 7.6977],
])
  .addTo(map)
  .bindPopup("Bonnenkamp")
  .openPopup();

var thirdProtectedSiteGeometry = L.polygon([
  [51.8833, 7.6416],
  [51.8693, 7.561],
  [51.8276, 7.5551],
  [51.8324, 7.6348],
  [51.8441, 7.6602],
  [51.8833, 7.6417],
])
  .addTo(map)
  .bindPopup("Davert")
  .openPopup();
