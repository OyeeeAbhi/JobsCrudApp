import {body , validationResult } from 'express-validator';
import { Request , Response , NextFunction } from "express";
import errorHandler from "./errorHandler";





export const JobDataValidator = [
    body('jobData').isObject().withMessage('jobData must be an object'),
    body('jobData.title')
        .isString()
        .withMessage('Title Field is Required'),
    body('jobData.company')
        .isString()
        .withMessage('Company Field is Required'),
    body('jobData.location')
        .optional()
        .isString()
        .withMessage('Location Field is Required'),
    body('jobData.salary')
        .isNumeric()
        .withMessage('Salary Field is Required'),
    body('jobData.description')
        .isString()
        .withMessage('Description Field is Required')
];


export const handleValidationErrors  = (req : Request,res : Response, next : NextFunction)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return errorHandler(res , 400 , errors)
    }else{
        next();
    }
}