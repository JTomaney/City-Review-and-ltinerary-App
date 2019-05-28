const CityListView = require('./views/city_list_view.js');
const MapView = require(`./views/map_view.js`);
const RegionSelectorView = require("./views/region_selector_view.js");
const Cities = require(`./models/cities.js`);

document.addEventListener("DOMContentLoaded", () => {

    const london = [51.51, -0.13];
    const mapdiv = document.querySelector(`#map`);
    const mapView = new MapView(mapdiv, london, 7);
    mapView.init()

    const regionSelector = document.querySelector("#region-list");
    const regionSelectorView = new RegionSelectorView(regionSelector);
    regionSelectorView.bindEvents()

    const cityContainer = document.querySelector('#cities-view-container')
    const cityListView = new CityListView(cityContainer)
    cityListView.bindEvents()


    const cities = new Cities(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=gb&minPopulation=100000&types=CITY`, `http://localhost:3000/api/cities`)
    cities.bindEvents()
    // cities.getData()


})
