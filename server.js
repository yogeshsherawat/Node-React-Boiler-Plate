let express = require("express");
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',)



app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})