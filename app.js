const express = require("express");
const app = express();

const queryFilter = require("./queryFilter.js");


app.listen(3000, () => {
    console.log("listening on p 3000")
})
