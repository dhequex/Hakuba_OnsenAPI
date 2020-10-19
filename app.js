const knexconfig = require("./knexfile");
const knex = require('knex')(knexconfig);

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

app.get("/api/", (req, res) => {
    knex
    .select()
    .from('name')
    .then ((data) => {
        console.log(data)
        res.send(data);
    });
});


app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
