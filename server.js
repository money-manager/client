import express from 'express';
import path from 'path';

const {
  SERVICE_NAME = 'client',
  SERVICE_PORT = 2000,
} = process.env;

const app = express();

app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (_, res) => {
  res.sendFile('index.html');
});

app.listen(SERVICE_PORT, (err) => {
  if (err) {
    throw new Error(err);
    process.exit(1);
  }

  console.log(`service "${ SERVICE_NAME }" is started on ${ SERVICE_PORT }`);
});
