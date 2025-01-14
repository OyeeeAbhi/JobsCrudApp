import express , {Express} from 'express'
const app : Express = express();

//Custom imports
import serverConfig from './serverConfigs/serverConfigs';
import apiRouter from './routes/routerIndex';
import sql from './dbConfigs/dbConfog';

app.use(express.json());
app.use('/api' , apiRouter);

app.listen(serverConfig.PORT , async ()=>{
    const res = await sql(`select 1 as response`);
    console.log(res , 'DB RESPONSE');
    console.log(`server is listening on port :: ${serverConfig.PORT}`)

})