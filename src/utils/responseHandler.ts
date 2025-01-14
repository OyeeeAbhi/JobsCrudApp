import { Response } from 'express';

export const responseHandler = (res : Response , status : number , data : any , isSuccess : Boolean) : any =>{
    res.status(status).json({
        success : isSuccess,
        status : status || 200 , 
        data : data
    })
}

export default responseHandler