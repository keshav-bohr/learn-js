const request = require('request');

const getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/c9255a5286cfacc49e5b2b3fb6aeea9a/${lat},${lng}`,
        json : true
    },(error, res, body) => {
        if(error){
            callback('unable to fetch the data from the darksky server');
        } else if(res.statusCode=== 400){
            callback('unable to fetch weather');
        } else if(res.statusCode === 200){
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            })
        }
    })
}

module.exports = {
    getWeather
}