import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './database';

import routes from './routes';

const app = express();

dotenv.config();

app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', routes());

const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectDb();
});
