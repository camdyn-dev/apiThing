const goodProject = [
    {
        name: "Create a video chat app with WebRTC and Socket.io!",
        type: "webdev",
        level: "intermediate",
        lang: "javascript",
        guide: "https://www.youtube.com/watch?v=DvlyzDZDEq4&list=PLsfZ5lhRvns1kzuYtp33If0wxigVh8er9&index=30&t=134s",
    },
    {
        name: "Create a 3D portfolio website!",
        type: "webdev",
        level: "intermediate",
        lang: "javascript",
        guide: "https://www.youtube.com/watch?v=Q7AOvWpIVHU&list=PLsfZ5lhRvns1kzuYtp33If0wxigVh8er9&index=26",
    },
    {
        name: "Create a Crypto tracker with React!",
        type: "webdev",
        level: "intermediate",
        lang: "javascript",
        guide: "https://www.youtube.com/watch?v=9ohK7CapmIs",
    },
    {
        name: "Build a web scraper!",
        type: "regex",
        level: "beginner",
        lang: "python",
        guide: "https://realpython.com/beautiful-soup-web-scraper-python/",
    },
    {
        name: "Build a PDF scraper!",
        type: "regex",
        level: "beginner",
        lang: "python",
        guide: "https://automatetheboringstuff.com/2e/chapter15/",
    },
    {
        name: "Build an e-commerce website with Django!",
        type: "webdev",
        level: "intermediate",
        lang: "python",
        guide: "N/A",
    },
    {
        name: "Replicate the famous 2048 game!",
        type: "gamedev",
        level: "intermediate",
        lang: "javascript",
        guide: "N/A",
    },
    {
        name: "Build a bug tracker with Django!",
        type: "webdev",
        level: "intermediate",
        lang: "python",
        guide: "N/A",
    },
    {
        name: "Build a bug tracker with Express!",
        type: "webdev",
        level: "intermediate",
        lang: "javascript",
        guide: "N/A",
    },
    {
        name: "Build an e-commerce website with Express!",
        type: "webdev",
        level: "intermediate",
        lang: "javascript",
        guide: "N/A",
    },
    {
        name: "Create a Public API with Node.JS!",
        type: "api",
        level: "intermediate",
        lang: "javascript",
        guide: "N/A",
    },
    // {
    //     name: "",
    //     type: "",
    //     level: "",
    //     lang: "",
    //     guide: "",
    // },
    // {
    //     name: "",
    //     type: "",
    //     level: "",
    //     lang: "",
    //     guide: "",
    // },
    // {
    //     name: "",
    //     type: "",
    //     level: "",
    //     lang: "",
    //     guide: "",
    // },
    // {
    //     name: "",
    //     type: "",
    //     level: "",
    //     lang: "",
    //     guide: "",
    // },
    // {
    //     name: "",
    //     type: "",
    //     level: "",
    //     lang: "",
    //     guide: "",
    // },



]

const mongoose = require('mongoose');
const Project = require('../models/project');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/projectAPI');
}

const inseminate = async () => {
    console.log("BEGIN INSEMINATION")
    await Project.deleteMany()

    goodProject.forEach(async (proj) => {
        const project = new Project(proj)
        await project.save()
    })
    console.log("INSEMINATION FINISHED")
}
inseminate()