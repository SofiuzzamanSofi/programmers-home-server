const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());


const courses = require("./data/courses.json")

app.get('/', (req, res) => {
    res.send("programmers-home-server, starts:-4 successfuly");
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log(`programmers-home-server running ok ${port}`);
})