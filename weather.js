function displayWeather() {
  // create a new OpenLayers map with Botswana as the center
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([24.66, -22.16]),
      zoom: 6
    })
  });

  // add weather data to the map as overlays
  var overlays = new ol.layer.Group({
    title: 'Weather',
    layers: [
      new ol.layer.Tile({
        title: 'Temperature',
        source: new ol.source.TileWMS({
          url: 'http://owsproxy.uni-muenster.de:8080/geoserver/wms',
          params: {
            'LAYERS': 'openweathermap:temperature',
            'VERSION': '1.3.0',
            'FORMAT': 'image/png',
            'TRANSPARENT': true
          },
          serverType: 'geoserver',
          crossOrigin: 'anonymous'
        })
      }),
      new ol.layer.Tile({
        title: 'Precipitation',
        source: new ol.source.TileWMS({
          url: 'http://owsproxy.uni-muenster.de:8080/geoserver/wms',
          params: {
            'LAYERS': 'openweathermap:precipitation',
            'VERSION': '1.3.0',
            'FORMAT': 'image/png',
            'TRANSPARENT': true
          },
          serverType: 'geoserver',
          crossOrigin: 'anonymous'
        })
      })
    ]
  });
  map.addLayer(overlays);
}
