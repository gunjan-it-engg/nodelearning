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


var axios = require("axios").default;
var chalk = require('chalk');

var options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '24.6036387,73.7098009'},
  headers: {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': 'c8baab0bc4mshd08d182ef228d04p14cff6jsn5c34904e5ae5'
  }
};

axios.request(options).then(function (response) {
  console.log(chalk.green.inverse.bold("Wel come to real-time weather forcasting system"));
  //console.log(response.data.current);   // showing the current weather of the city
  console.log(chalk.inverse("Last Weather update", response.data.current.last_updated));
  console.log(chalk.red.inverse.bold("current Temprature",+ response.data.current.temp_c + " c in degree"));
}).catch(function (error) {
  console.error(error);
});

