import express from 'express'
import dbQuery from './DatabaseFiles/dev/dbQuery';
import {createAnimalsTable} from './DatabaseFiles/dev/dbConnection'

const PORT = 3000
const server = express();

const constructURL = (version, urlPath) => `/api/${version}/${urlPath}`

server.get(constructURL('v1','list'),(req, res) => {
    
   // createAnimalsTable()
    
    const all = dbQuery.query("SELECT * FROM ANIMALS")

    res.json(all)
        
})

server.listen(PORT,  () => {

    try{
        console.log(`server started on port ${PORT} `)
           createAnimalsTable() //Table was successfully created !
    }
    catch (error){

        console.log(error)

    }
    
    
    

})
