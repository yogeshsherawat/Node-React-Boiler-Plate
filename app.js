const port = process.env.PORT || 4000;

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const axios = require('axios');


let callback = 'http://localhost:3000/callback/'





app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



app.get('/', async (request, response) => {

    response.json({ abc: 'cde' });
    
});


app.listen(port, () => {
    console.log("editor started");
});