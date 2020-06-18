import express, { response } from 'express'
import AnimalRoute from './routes/animalRoute'
import bodyparser from 'body-parser'
import morgan from 'morgan'// middleware dependency

//Ask Greg Why calling this at any endpoint causes the request to fail.
import { createAnimalsTable } from './DatabaseFiles/dev/dbConnection';


//Local testing is happening on port 3000
const PORT = 3000
const server = express();

//generate URL for each endpoint using the version and path strings passed in 
const constructURL = (version, urlPath) => `/api/${version}/${urlPath}`

server.use(morgan('tiny')) //middleware dependency
server.use(bodyparser.json()) // data in the body in json format

server.use(constructURL('v1','animals'), AnimalRoute) // tell the serever that requests with the following url
// (/api/v1/animals) are to be routed to the Animal router file where the endpoints were declared. The router file was imported at the top



server.listen(PORT, () => {

    try{
        console.log(`server started on port ${PORT} `)
         
    }
    catch (error){

        
        console.log(error)

    }
    
    
    

})
