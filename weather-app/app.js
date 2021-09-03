const geocode = require('./utils/geocode.js');


// // console.log('starting');
// // setTimeout(()=> {
// // 	console.log('20 seconds');
// // },20000)

// // console.log('stopping');

// var axios = require("axios").default;
// // const request = require("request").default;


// var options = {
//   method: 'GET',
//   url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
//   params: {query: 'Stockholm'},
//   headers: {
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
//     'x-rapidapi-key': 'c8baab0bc4mshd08d182ef228d04p14cff6jsn5c34904e5ae5'
//   }
// };
 
//  const getData = (name)=>{


// axios.request(options).then(function (response) {
// 	const data = (response.data);
//   console.log(data);
//   const result = response.data.Places.filter(function(place) { 
    
//     // const a = placeId === 'STOC-sky';
//     return place.PlaceName ===name;
//   });
//   // const result = response.data.forEach(Places => places);
// 	console.log(result[0].PlaceName);
//   // console.log(response.data.Places[0]);
// }).catch(function (error) {
// 	console.error(error);
// });
// }

// getData("Stockholm")
// // const url = "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=india"
// // request({ url : url },(error,response)=>{
// // 	const data = JSON.parse(response.body) 
// // 	console.log(data);
// // })


// var axios = require("axios").default;
// var chalk = require('chalk');
// const request = require('request');

// var options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/current.json',
//   params: {q: '24.6036387,73.7098009'},
//   headers: {
//     'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
//     'x-rapidapi-key': 'c8baab0bc4mshd08d182ef228d04p14cff6jsn5c34904e5ae5'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(chalk.green.inverse.bold("Wel come to real-time weather forcasting system"));
//   //console.log(response.data.current);   // showing the current weather of the city
//   console.log(chalk.inverse("Last Weather update", response.data.current.last_updated));
//   console.log(chalk.red.inverse.bold("current Temprature",+ response.data.current.temp_c + " c in degree"));
// }).catch(function (error) {
//   console.log("error");
//   console.error(error);
// });



// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1IjoiZ3VuamFuc2hyaW1hbGkiLCJhIjoiY2t0MnFrNWhxMGd1YzJucjF2ZzdkazJ6bCJ9.rEZG0EObPRv0yGMO8HJTvA"

// request({ url:geocodeURL , json: true }, (error,response) => {

//   if(error){
//     console.log("error");
//   } else if(response.body.features.length === 0){
//     console.log("unable to find location");
//   }
//   else{
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//     console.log(latitude,longitude);
//   }
// })


geocode('Bosten',(error,data) => {
  console.log('Error',error);
  console.log('Data',data);
})

// const request = require('request');

// // callback abstraction 
// const geocode = (address , callback) => {
//   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?limit=2&access_token=pk.eyJ1IjoiZ3VuamFuc2hyaW1hbGkiLCJhIjoiY2t0MnFrNWhxMGd1YzJucjF2ZzdkazJ6bCJ9.rEZG0EObPRv0yGMO8HJTvA'
  
//   request({ url : url, json:true },(error,response)=>{
//     if(error) {
//       callback('unable to connect to location service!',undefined)
//     } else if (response.body.features.length === 0){
//       callback('unable to find location. Try another search.',undefined)
//     } else {
//       callback(undefined, {
//           latitude: response.body.features[0].center[0],
//           longitude: response.body.features[0].center[1],
//           location: response.body.features[0].place_name
//       })
//     }
//   })
// }
// geocode('usa' , (error , data) => {
//   console.log('Error', error) 
//   console.log('Data', data)
// })