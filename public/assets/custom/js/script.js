// JAVASCRIPT DOM FUNCTION
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// CALLING DOM FUNCTION IF YOU DON'T NEED ALPINE JS, JUST WRITE NATIVE JS CODE HERE TO GET FULLY DOM LOADED
ready(function () {

	var map = L.map('map').setView([51.505, -0.09], 13);
	var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
	}).addTo(map);

	document.querySelector('.leaflet-control-attribution').style.display = 'none';
	document.querySelector('.leaflet-top').style.zIndex = 400;
	



});