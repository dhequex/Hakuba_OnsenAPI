const knexconfig = require("./knexfile");
const knex = require('knex')(knexconfig);

const express = require('express');
const Knex = require("knex");
const app = express();
const port = 3000;

app.use(express.static("./"));

app.get("/api/name", (req, res) => {
    knex
    .select()
    .from('name')
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});

app.get("/api/facilities", (req, res) => {
    knex
    .select()
    .from('facilities')
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});

app.get("/api/businesshours", (req, res) => {
    knex
    .select()
    .from('BusinessHours')
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});

app.get("/api/fees", (req, res) => {
    knex
    .select()
    .from('fees')
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});



app.post("/api/createOnsen/:name", async (req, res) => {
    const newOnsen = req.params
    
    const names = await knex.table('name').insert(newOnsen);
    return res.status(201).json(names);

});


app.patch("/api/modifyOnsen/:name", async (req, res) => {
    const changeOnsen = Knex.select(req.params).from('name');
    
    
    const patch = await knex.table('name').insert(changeOnsen);
    return res.status(201).json(patch);
  
});

app.delete("/api/deleteOnsen/:name", async (req, res) => {
    const toDelete = Knex.select(req.params).from('name')
    
    const deletedOnsen = await knex.delete(toDelete);
    return res.status(201).json(deletedOnsen);
   
});



app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
