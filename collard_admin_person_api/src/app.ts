import express, { Application } from 'express';
import "reflect-metadata"
import DistributorRouter from './controllers/DirectorController';
import { bootstrap } from './container-setup';

bootstrap();

const app: Application = express();

app.use('/director',DistributorRouter);

app.listen(5000, () => console.log('App and running'));
