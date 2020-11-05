import 'reflect-metadata';
import express, { Application } from 'express';
import { bootstrap } from './container-setup';
import MovieRouter from './controllers/MovieController';

bootstrap();

const app: Application = express();
app.use('/movie', MovieRouter);

app.listen(5050, () => console.log('App and running'));