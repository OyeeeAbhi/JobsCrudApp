export type CreateObjectType = {
    title: string,
    company : string , 
    location : string , 
    salary : number , 
    description : string
}

export type UpdateObjectType = {
    id : number
    title? : string , 
    company? : string , 
    location? : string , 
    salary? : string , 
    description? : string
}