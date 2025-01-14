import express from 'express'
import jobRouter from './jobRouter';
const v1Router = express.Router();


v1Router.use(jobRouter);

export default v1Router;