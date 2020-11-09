import 'reflect-metadata';
import express, { Application } from 'express';
import { bootstrap } from './container-setup';
import MovieRouter from './controllers/MovieController';
import * as bodyParser from 'body-parser';

bootstrap();

const app: Application = express();
app.use(bodyParser.json())
app.use('/movie', MovieRouter);

app.listen(5050, () => console.log('App and running'));