//packages
const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit")
const mongoose = require('mongoose');
const mongoSanitize = require("express-mongo-sanitize")

//models
const Project = require("./models/project.js")
const sample = require("./utilities/sample.js")

//mongoose stuff
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/projectAPI');
}


const apiLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 25,
    message: "You've sent too many requests! Please wait about 15 minutes before trying again.",
    standardHeaders: true,
    legacyHeaders: false,
})




app.use(mongoSanitize())


app.get("/project", apiLimit, async (req, res) => {
    const options = req.query

    if ("type" in options || "level" in options || "lang" in options || "any" in options) { //this will be a bitch to expand; makes sure at least one param is in there
        console.log(options)

        const project = await Project.find(options)
        const result = sample(project)
        if (result) {
            return res.json(result)
        }
        else {
            return res.json("Uh oh, we couldn't find a project with those options.")
        }

    } else {
        res.json("Those parameters don't match anything we accept, sorry!")
    }
})

app.listen(3000, () => {
    console.log("listening on p 3000")
})

