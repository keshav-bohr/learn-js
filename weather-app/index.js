const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
.options({
    a:{
        demand : true,
        alias :'address',
        describe : 'address to fetch for',
        string :true
    }
})
.help()
.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            } else{
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        })
    }
});

//c9255a5286cfacc49e5b2b3fb6aeea9a
