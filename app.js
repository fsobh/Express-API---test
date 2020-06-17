import express, { response, request } from 'express'
import dbQuery from './DatabaseFiles/dev/dbQuery';
import {createAnimalsTable} from './DatabaseFiles/dev/dbConnection'

const PORT = 3000
const server = express();

const constructURL = (version, urlPath) => `api/${version}/${urlPath}`

server.get(constructURL('v1','get_list'),(request, response) => {
    
    response.send("First Route")
})

server.listen(PORT, () => {

    createAnimalsTable() //Table was successfully created !
    console.log(`server started on port ${PORT} `)

})