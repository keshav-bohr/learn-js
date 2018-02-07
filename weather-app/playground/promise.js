//import { resolve } from 'url';

// import { read } from "fs";

const request = require('request');

const geocodeAddress = (address) => {
    return new Promise ((resolve,reject) =>{
        let encodedAddress = encodeURIComponent(address);
        
        request({
            url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json : true
        },(error,res,body) => {
            if(error){
                reject("unable to connect to the google server");
            }

            else if(body.status==="ZERO_RESULTS"){
                reject("unable to find that address");
            }

            else if(body.status==="OK"){
                resolve({
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longitude : body.results[0].geometry.location.lng
                });
            }
        })
    })
}

geocodeAddress('342008').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) =>{
    console.log(errorMessage);
})