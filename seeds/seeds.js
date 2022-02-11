const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/projectAPI');
}
const Project = require("../models/project.js")

const { djPro, names, types, levels, lang } = require("./ideas.js")

const inseminate = async () => {
    console.log("SEEDING STARTED")
    await Project.deleteMany()

    for (let i = 0; i < 5; i++) {
        const outOfThree = Math.floor(Math.random() * 3)
        const project = new Project({
            name: `${names[outOfThree]}`,
            type: `RegEx`,
            level: `${levels[outOfThree]}`,
            lang: `${lang[outOfThree]}`
        })
        await project.save()
    }
    const djangoWebsite = new Project(djPro)
    await djangoWebsite.save()
    console.log("SEEDING FINISHED")
}
inseminate()