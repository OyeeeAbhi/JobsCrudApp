import sql from "../dbConfigs/dbConfog";
import { CreateObjectType , UpdateObjectType } from "../types/types";

export const getAllJobsRepository = async () : Promise<any> =>{
    try{
        const allJobs = await sql('select * from public.job_posts');
        return allJobs;
    }catch(error : any){
        throw new Error(error);
    }
}

export const getJobById = async(id : number | string) : Promise<any> =>{
    try{
        const job = await sql( `select * from public.job_posts where id = $1 ` , [id]);
        return job;
    }catch(error : any){
        throw new Error(error);
    }
}

export const deleteJobById = async(id : number | string) : Promise<any> =>{
    try{
        await sql(`delete from public.job_posts where id = $1 ` , [id]);
    }catch(error : any){
        throw new Error;
    }
}

export const createJobOpening = async(jobData : CreateObjectType) : Promise<any> => {
    try{
        return await sql(`INSERT INTO job_posts (title, company, location, salary, description)
        VALUES($1 , $2 , $3 , $4 , $5) RETURNING id` , [jobData.title , jobData.company , jobData.location , jobData.salary , jobData.description]);
        // console.log(result , 'after job creation');
        // return result;
    }catch(error : any){
        throw new Error(error);
    }
}

export const updateJobOpeningById = async(updateObject : UpdateObjectType ) : Promise<any> =>{
    try{
        const setFields: string[] = [];
        const values: (string | number)[] = [];

        if (updateObject.title) {
            setFields.push('title = $' + (setFields.length + 1));
            values.push(updateObject.title);
        }
        if (updateObject.company) {
            setFields.push('company = $' + (setFields.length + 1));
            values.push(updateObject.company);
        }
        if (updateObject.location) {
            setFields.push('location = $' + (setFields.length + 1));
            values.push(updateObject.location);
        }
        if (updateObject.salary) {
            setFields.push('salary = $' + (setFields.length + 1));
            values.push(updateObject.salary);
        }
        if (updateObject.description) {
            setFields.push('description = $' + (setFields.length + 1));
            values.push(updateObject.description);
        }
        console.log(setFields , 'this is the setfiles');
        console.log(values , 'this is the value fields')
        const query = `UPDATE public.job_posts SET ${setFields.join(', ')} WHERE id = '${updateObject.id}' `;
        console.log(query , 'this is the query');

        await sql(query, values);

    }catch(error : any){
        throw new Error(error);
    }
}