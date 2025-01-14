Job Posts API SERVER
    This API is designed to manage job postings. It provides endpoints for creating, reading, updating, and deleting job posts. Below are the available routes and their details:

Base URL
    https://jobscrudapp.onrender.com/api/v1/jobs


Setup
    Clone the repository.
    Install dependencies: npm install
    Set up environment variables in a .env file:
        DATABASE_URL=your_database_url
        PORT=your_server_port
    Start the server: npm run dev



Error Handling
    All routes use the errorHandler utility to return consistent error responses.
        Error Response Example:
            {
                "success": false,
                "status": 500,
                "error": "Internal Server Error"
            }



Validators
    Request Validation for /jobs (POST)
        The following validations are applied to the request body:
            title: Must be a string and is required.
            company: Must be a string and is required.
            location: Must be a string and is optional.
            salary: Must be a numeric string and is optional.
            description: Must be a string and is required.

Endpoints
    1. Get All Jobs            
        url : https://jobscrudapp.onrender.com/api/v1/jobs
        method : GET
    2. Get A Specific By Id            
        url : https://jobscrudapp.onrender.com/api/v1/jobs/:id
        method : GET
    3. Create A Job Opening            
        url : https://jobscrudapp.onrender.com/api/v1/jobs
        method : POST
        example payload : {
                "jobData": {
                    "title": "Software Engineer Tester in Adobe",
                    "company": "Tech Solutions Inc.",
                    "location": "New York, NY",
                    "salary": "120000",
                    "description": "We are looking for a talented Software Engineer tester to join our dynamic team. The ideal candidate will have a passion for coding, problem-solving, and continuous learning."
                }
        }
    4. Update a Job Opening            
        url : https://jobscrudapp.onrender.com/api/v1/jobs/:id
        method : PUT
    5. Delete a Job Opening            
        url : https://jobscrudapp.onrender.com/api/v1/jobs/:id
        method : DELETE                

