//express stuff
const express = require("express");
const app = express();

//mongoose stuff
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/projectAPI');
}


//I am so upset that there's a built in query parser that I did not find before I wrote mine M A D G E
// const queryFilter = require("./queryFilter.js");

app.get("/project", (req, res) => {
    const options = req.query
    console.log(options)
    res.send(options)
})

app.listen(3000, () => {
    console.log("listening on p 3000")
})

