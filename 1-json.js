const fs = require('fs');

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// fs.writeFileSync('1-json.json',bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);

// console.log(parsedData.title, '\r\n' +parsedData.author);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = (dataBuffer.toString());
console.log(dataJSON);
const data = JSON.parse(dataJSON);

data.name='Drashti Patel';
data.age=24;


const jsondata = JSON.stringify(data);
console.log(jsondata);

fs.writeFileSync('1-json.json',jsondata);
