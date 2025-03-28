// Mapbox access token
const mapboxAccessToken = 'pk.eyJ1Ijoia2FuZ3UxMCIsImEiOiJjbHU1aTJ5NGcxcjgwMmtxczN5Z3U2dTVxIn0.V_bAup9EGYnSATEZMagAaA';

// Map configuration
const mapConfig = {
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [20.4612, 44.8125],
    zoom: 13
};

// Data sources
const dataSources = {
    isochrones: 'https://raw.githubusercontent.com/kanguu10/belgrade_metro_map/main/generalized_dissolved_iso.geojson',
    metroLines: 'https://raw.githubusercontent.com/kanguu10/belgrade_metro_map/main/metro_lines_smooth.geojson',
    metroStations: 'https://raw.githubusercontent.com/kanguu10/belgrade_metro_map/main/metro_stations_with_pop.geojson'
};

// Define your layers with their properties
const layers = [
    {
        id: 'stations',
        source: 'source3',
        type: 'circle',
        color: '#1E88E5',       // Bright blue for stations
        radius: 5,
        strokeColor: '#0D47A1', // Darker blue for station outline
        strokeWidth: 1.5,       // Width of the outline
        label: 'Metro stations'
    },
    {
        id: 'line-1',
        type: 'line',
        color: '#FF0000',
        label: 'Line 1'
      },
      {
        id: 'line-2',
        type: 'line',
        color: '#0000FF',
        label: 'Line 2'
      },
      {
        id: 'line-3',
        type: 'line',
        color: '#00AA00',
        label: 'Line 3'
      },
    {
        id: 'area15',
        source: 'source1',
        type: 'fill',
        color: '#9C27B0',       // for 5-minute area
        opacity: 0.5,
        label: '5 minutes accessibility area'
    },
    {
        id: 'area10',
        source: 'source1',
        type: 'fill',
        color: '#BA68C8',       // for 10-minute area
        opacity: 0.5,
        label: '10 minutes accessibility area'
    },
    {
        id: 'area5',
        source: 'source1',
        type: 'fill',
        color: '#E1BEE7',       // for 15-minute area
        opacity: 0.5,
        label: '15 minutes accessibility area'
    }
];
