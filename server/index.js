const express = require("express");
const massive = require("massive");
const app = express();
const controller = require("./controller");
require("dotenv").config();

let {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("db connected")
})

app.get('/api/house', controller.getHouse);
app.post('/api/house', controller.addHouse);
app.delete('/api/house/:id', controller.deleteHouse);

app.listen(SERVER_PORT, () => {
    console.log(`Server Listening on port ${SERVER_PORT}`);
})



