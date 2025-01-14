import { Request , Response } from "express";
import errorHandler from "../utils/errorHandler";

import {getAllJobsRepository , getJobById , updateJobOpeningById , createJobOpening , deleteJobById} from '../repository/jobRepository';
import responseHandler from "../utils/responseHandler";

export const getAllJobsController = async (req:Request , res : Response) : Promise<any> =>{
    try{
        console.log(req.body);
        const allJobs = await getAllJobsRepository();
        return responseHandler(res , 200 , allJobs , true);
    }catch(error : any){
        return errorHandler(res , 500 , error);
    }
}

export const getJobByIdController = async (req:Request , res : Response) : Promise<any> =>{
    try{
        let {id} = req.params; 
        
        const job = await getJobById(id);
        return responseHandler(res , 200 , job , true);
    }catch(error : any){
        return errorHandler(res , 500 , error);
    }
}

export const DeleteJobByIdController = async (req:Request , res : Response) : Promise<any> =>{
    try{
        let {id} = req.params; 

        await deleteJobById(id);
        return responseHandler(res , 200 , 'Job Deleted Successfully' , true);
    }catch(error : any){
        return errorHandler(res , 500 , error);
    }
}

export const CreateJobController = async (req:Request , res : Response) : Promise<any> =>{
    try{
        const jobData = req.body.jobData;
        await createJobOpening(jobData);
        return responseHandler(res , 200 , 'Job Created Succesfully' , true);
    }catch(error : any){
        return errorHandler(res , 500 , error);
    }
}

export const UpdateJobByIdController = async (req:Request , res : Response) : Promise<any> =>{
    try{
        let {id} = req.params; 
        const jobData = req.body.jobData;
        jobData.id = id;
        await updateJobOpeningById(jobData);
        return responseHandler(res , 200 , 'Job Updated Succesfully' , true);
    }catch(error : any){
        return errorHandler(res , 500 , error);
    }
}