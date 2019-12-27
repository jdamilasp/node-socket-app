const net = require('net');

const port = 3030;

const socket = (s) => {
  s.on('data', (data) => {
    console.log('FROM CLIENT : ', data.toString());
  });

  s.write('S : hello, I am Socket Server \n');

  s.end('S : close connection, now');
};

const server = net.createServer(socket);

server.on('error', (err) => {
  console.error(err);
});

server.listen(port, () => {
  console.log(`Start Socket Server : ${server.address().port}`);
});
