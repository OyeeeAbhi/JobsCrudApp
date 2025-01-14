import { Response } from 'express';
export const errorHandler = (res : Response, status : number , error? : any) : any=>{
    res.status(status).json({
        success : false , 
        status : status || 500 , 
        error : error?.message || error?.error?.message || error || 'Internal Server Error'
    })
}

export default errorHandler