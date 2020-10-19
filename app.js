const knexconfig = require("./knexfile");
const knex = require('knex')(knexconfig);

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("/"));

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

app.post("/api/name/:name", (req, res) => {
    newOnsen = req.params
    
    knex
    .select()
    .from('fees')
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});


app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
