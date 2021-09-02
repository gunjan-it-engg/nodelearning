// console.log('starting');
// setTimeout(()=> {
// 	console.log('20 seconds');
// },20000)

// console.log('stopping');

var axios = require("axios").default;
// const request = require("request").default;


var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  params: {query: 'Stockholm'},
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': 'c8baab0bc4mshd08d182ef228d04p14cff6jsn5c34904e5ae5'
  }
};

axios.request(options).then(function (response) {
	const data = (response.data);
  const result = response.data.Places.forEach(placeId === 'STOC-sky'=>{
    console.log(placeId);
    return placeId;
  })
  // const result = response.data.forEach(Places => places);
	console.log(result);
  // console.log(response.data.Places[0]);
}).catch(function (error) {
	console.error(error);
});



// const url = "https://weatherapi-com.p.rapidapi.com/astronomy.json?q=india"
// request({ url : url },(error,response)=>{
// 	const data = JSON.parse(response.body) 
// 	console.log(data);
// })