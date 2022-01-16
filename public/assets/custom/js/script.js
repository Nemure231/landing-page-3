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

	// document.querySelector('.leaflet-pane').style.zIndex = 0;
    

	var map = L.map('map').setView([51.505, -0.09], 13);
	// map.createPane('imagePane');
	// map.getPane('imagePane').style.zIndex = -1;
	// map.getPane('imagePane').style.position = 'absolute';
	var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		// pane: 'imagePane'
	}).addTo(map);



});