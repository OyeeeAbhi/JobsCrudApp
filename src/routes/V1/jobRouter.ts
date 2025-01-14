import express from "express";
import {getAllJobsController , getJobByIdController , DeleteJobByIdController , UpdateJobByIdController , CreateJobController} from '../../controllers/jobController'
import {JobDataValidator ,  handleValidationErrors} from '../../utils/validator'
const jobRouter = express.Router();



jobRouter.get('/jobs' , getAllJobsController);
jobRouter.post('/jobs' , JobDataValidator , handleValidationErrors ,  CreateJobController);
jobRouter.get('/jobs/:id' , getJobByIdController);
jobRouter.put('/jobs/:id' , UpdateJobByIdController);
jobRouter.delete('/jobs/:id', DeleteJobByIdController);


export default jobRouter;