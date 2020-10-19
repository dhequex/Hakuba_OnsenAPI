const knex = require('knex')({
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      user : '3301hakuba',
      password : 'your_database_password',
      database : 'hakuba_hotsprings'
    }
  });

const names = knex
.select()
.table("name")
.then((rows) => {
    console.log(rows)
});

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("/"));

app.get("/", (req,res) => {
    res.send("Hello world")
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
