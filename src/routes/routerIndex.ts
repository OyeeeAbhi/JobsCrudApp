import express from 'express'
import v1Router from './V1/v1RouterIndex';

const apiRouter = express.Router();
apiRouter.use('/v1' , v1Router);


export default apiRouter;

