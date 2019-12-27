const net = require('net');

const port = 3030;
const client = net.createConnection({ port }, () => {
  client.write('C : Hello, I am client !');
});
client.on('data', (data) => {
  console.log('FROM SERVER : ', data.toString());
  client.end();
});
client.on('end', () => {
  console.log('C : close connection ');
});
