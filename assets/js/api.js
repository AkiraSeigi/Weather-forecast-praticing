
'use strict';

const api_key = "bef65ba1f876aa17d8053796d815d7b9";






export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data =>  callback(data));  
}


// const URL = {
//     test: function () {
//       const api_key = "bef65ba1f876aa17d8053796d815d7b9";
//       const city = "New York";
//       return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
//     }
//   };

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
      },

      forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
      },

      airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
      },

      reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
      },

      geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
      } 
}