
'use strict';

const api_key= "bef65ba1f876aa17d8053796d815d7b9";
 

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));  
}

export const url= {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
      },
      forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`
      },
      airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
      },
      reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`
      },
}