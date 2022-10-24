const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());



const category = require('./data/category.json')
const courses = require("./data/courses.json")

app.get('/', (req, res) => {
    res.send("programmers-home-server,only for server, starts with successfuly");
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/category', (req, res) => {
    res.send(category);
});


app.get('/course/:category', (req, res) => {
    const category = req.params.category;
    const categoryCourse = courses.filter(course => course.category === category);
    res.send(categoryCourse);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const idCourse = courses.filter(course => course.id === id);
    res.send(idCourse);
});

app.listen(port, () => {
    console.log(`programmers-home-server running ok ${port}`);
});