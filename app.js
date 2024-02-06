// Initialize map
var map = L.map('map').setView([0, 0], 2);

// Add default OSM layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add satellite layer
var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri'
});

// Layer control for switching between layers
var baseLayers = {
    "OSM": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }),
    "Satellite": satelliteLayer
};

L.control.layers(baseLayers).addTo(map);

// Search and geocoding control
L.Control.geocoder().addTo(map);

// Initialize Leaflet.draw plugin
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
    draw: {
        polygon: true,
        polyline: true,
        rectangle: true,
        circle: true,
        marker: true
    }
});
map.addControl(drawControl);


map.on('draw:created', function (e) {
    var layer = e.layer;
    drawnItems.addLayer(layer);
});

map.on('draw:edited', function (e) {
    
});

map.on('draw:deleted', function (e) {

});
