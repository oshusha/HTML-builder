let path = require('path');
let fs = require('fs');
let { stdout, stdin, exit } = require('process');

let writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Write your text:');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    exitFunc();
  }
  writeStream.write(data);
});

process.on('SIGINT', exitFunc);

function exitFunc() {
  stdout.write('See you!');
  exit();
}
