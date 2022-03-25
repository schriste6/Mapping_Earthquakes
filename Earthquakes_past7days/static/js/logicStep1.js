// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
	"Streets": streets,
	"Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [39.5, -98.5],
	zoom: 3,
	layers: [streets]
})


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

<<<<<<< HEAD
// Accessing the Toronto neighborhoods GeoJSON URL.
let earthquake_GeoJSON_data = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
=======
<<<<<<<< HEAD:Mapping_GeoJSON_Linestrings/static/js/logic.js
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/schriste6/Mapping_Earthquakes/main/torontoRoutes.json";
========
// Accessing the Toronto neighborhoods GeoJSON URL.
let earthquake_GeoJSON_data = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
>>>>>>>> 9149bbefd5ef34136606ba6d63c20fffc8243702:Earthquakes_past7days/static/js/logicStep1.js
>>>>>>> 9149bbefd5ef34136606ba6d63c20fffc8243702

// Retrieve the earthquake GeoJSON data.
d3.json(earthquake_GeoJSON_data).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
<<<<<<< HEAD
  L.geoJson(data).addTo(map);
});

=======
<<<<<<<< HEAD:Mapping_GeoJSON_Linestrings/static/js/logic.js
  L.geoJson(data,{
	  style: myStyle,
	  onEachFeature: function(feature,layer){
		  layer.bindPopup("<h3>Airline: "+ feature.properties.airline+"</h3><hr><h3> Destination:"
		  + feature.properties.dst + "</h3>");
	  }
  }).addTo(map);
});
========
  L.geoJson(data).addTo(map);
});
>>>>>>>> 9149bbefd5ef34136606ba6d63c20fffc8243702:Earthquakes_past7days/static/js/logicStep1.js
>>>>>>> 9149bbefd5ef34136606ba6d63c20fffc8243702
