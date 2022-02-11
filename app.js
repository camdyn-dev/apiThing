//express stuff
const express = require("express");
const app = express();

//mongoose stuff
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/projectAPI');
}
const Project = require("./models/project.js")
const sample = require("./utilities/sample.js")

//I am so upset that there's a built in query parser that I did not find before I wrote mine M A D G E
// const queryFilter = require("./queryFilter.js");

app.get("/project", async (req, res) => {
    const options = req.query

    if ("type" in options || "level" in options || "lang" in options) { //this will be a bitch to expand; makes sure at least one param is in there
        console.log(options)

        const project = await Project.find(options)
        const result = sample(project)
        if (result.length !== 0) {
            return res.send(result)
        }
        else {
            return res.send("Uh oh, we couldn't find a project with those options.")
        }

    } else {
        res.send("Those parameters don't match anything we accept, sorry!")
    }
})

app.listen(3000, () => {
    console.log("listening on p 3000")
})

