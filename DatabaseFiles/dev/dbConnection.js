import pool from './pool';

//connect to the database
pool.on('connect', () => {
  console.log('connected to the db');
});


//create animal table if not exists
const createAnimalsTable = () => {
  console.log("Created tables....")
  const animalCreateQuery = `CREATE TABLE IF NOT EXISTS Animals
  (id SERIAL PRIMARY KEY,  
  animal_name VARCHAR(25), 
  animal_type VARCHAR(25), 
  animal_age  SMALLINT)`;

  pool.query(animalCreateQuery) //--> tell pool to execut the query
    .then((res) => {
      console.log(res);
      
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

    const insert = "INSERT INTO ANIMALS(animal_name, animal_type, animal_age) VALUES(Fred, Elephant, 10), (geany, Lion, 10), (Kevin, Dog, 8);"

    pool.query(insert) //--> tell pool to execut the query
    .then((res) => {
      console.log("Data inserted....")
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log("Data NOT inserted....")
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {   // ---> wait for process.exit(0)
    console.log('client removed');
    process.exit(0);
  });

  export {
    createAnimalsTable
  }