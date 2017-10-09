import axios from 'axios';

let _baseURL = 'https://api.openweathermap.org/data/2.5/';
let _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';


let prepRouteParams = (queryStringData) => {
    return Object.keys(queryStringData)
        .map(function (key) {
            return key + '=' + encodeURIComponent(queryStringData[key]);
        }).join('&')
}


let getQueryStringData = (city) => {
    return {
        q: city,
        type: 'accurate',
        APPID: _APIKEY,
        cnt: 5
    }
}

let prepUrl = (type, queryStringData) => {
    return _baseURL + type + '?' + prepRouteParams(queryStringData);
}



let getCurrentWeather = (city) => {
    let queryStringData = getQueryStringData(city);
    let url = prepUrl('weather', queryStringData)

    return axios.get(url)
        .then(function (currentWeatherData) {
            return currentWeatherData.data
        })
}

let getForecast = (city) => {
    let queryStringData = getQueryStringData(city);
    let url = prepUrl('forecast/daily', queryStringData)

    return axios.get(url)
        .then(function (forecastData) {
            return forecastData.data
        })
}

module.exports = {
    getCurrentWeather,
    getForecast
};