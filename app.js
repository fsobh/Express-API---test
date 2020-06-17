import express, { response } from 'express'
import dbQuery from './DatabaseFiles/dev/dbQuery';
import { createAnimalsTable } from './DatabaseFiles/dev/dbConnection';


const PORT = 3000
const server = express();

//generate URL for each endpoint
const constructURL = (version, urlPath) => `/api/${version}/${urlPath}`

//Get all animals
server.get(constructURL('v1','list_animals'),(req, response) => {

     dbQuery.query("SELECT * FROM animals").then((res) => {

        response.send(JSON.stringify(res.rows))
      
    })
})

//Get animal by id 
server.get(`${constructURL('v1','list_animal')}/:id`,(req, response) => {

    const animal_id = req.params.id

    dbQuery.query("SELECT * FROM animals WHERE ID = $1", [animal_id]).then((res) => {

        res ?
    res.rowCount > 0 ? response.send(JSON.stringify(res.rows)) : response.send("Animal Does not exist") : res.send("Resource Error")

       
     
   })
})

//Add an animal
server.post(constructURL('v1','update_animal'),(req, response) => {

    
    response.end()

})

//Update an animal by ID
server.put(constructURL('v1','add_animal'),(req, response) => {

    
    response.end()

})

//remove an animal
server.delete(constructURL('v1','remove_animal'),(req, response) => {

    
    response.end()

})

server.listen(PORT, () => {

    try{
        console.log(`server started on port ${PORT} `)
         
    }
    catch (error){

        
        console.log(error)

    }
    
    
    

})
