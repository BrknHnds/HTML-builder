const fs = require('fs');
const readline = require('readline');
const writeStream = fs.createWriteStream('./02-write-file/text.txt');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const handleInput = (data) => {
  if (data === 'exit') {
    console.log('session finished');
    rl.close();
    return;
  }

  writeStream.write(String(data) + '\n', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    rl.question('Type your text: ', handleInput);
  });
}

rl.on('SIGINT', () => {
  console.log('session aborted');
  rl.close();
});

rl.question('Type your text: ', handleInput);