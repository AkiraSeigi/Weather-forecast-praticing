
'use strict';

import {updateWeather, error404} from "./app.js";
const defaultLocation = "#/weather?lat=23.251314&lon=90.851784" //London

const currentLocation = function() {
    window.navigator.geolocation.getCurrentPosition(res => {
        const {latitude, longtitude} = res.coords;

        updateWeather(`lat= ${latitude}`, `lon=${longtitude}`);
    }, err => {
        window.location.hash = defaultLocation;
    });
}


const searchedLocation = query => updateWeather(...query.split("&"));
// updateWeather("lat=51.5073219", "lon=-0.1276474")

const routes = new Map([
    ["/current-location", currentLocation],
    ["/Weather", searchedLocation]
]);

const checkHash = function() {
    const requestURL = window.location.hash.slice(1);

    const [route, query] = requestURL.includes ? requestURL.split("?"): [requestURL];

    routes.get(route) ? routes.get(route)(query): error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function(){ 
    if( !window.location.hash) {
        window.location.hash = "#/current-location"
    } else {
        checkHash();
    }
})