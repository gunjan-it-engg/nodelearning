const fs = require('fs')
const book ={
	title:'ego is the Enemy',
	author:'Ryan Holiday',
	age:'23',
	cgpa:'A+'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON);
const parseData = JSON.parse(bookJSON)
// console.log(parseData.author);
fs.appendFileSync('1-json.json',bookJSON)

// reading a file which will be created presently .
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title);