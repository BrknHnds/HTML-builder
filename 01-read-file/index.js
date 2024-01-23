const fs = require('fs');
const readStream = fs.createReadStream('./01-read-file/text.txt');
readStream.on('data', (dataPart) => {
  console.log(dataPart.toString());
})
readStream.on('error', (err) => {
  console.log(err);
})