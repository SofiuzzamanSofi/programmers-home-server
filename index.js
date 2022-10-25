const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());




const category = require('./data/category.json')
const courses = require("./data/courses.json")




app.get('/', (req, res) => {
    res.send("programmers-home-server,only for developers successfuly");
});



// all courses 
app.get('/courses', (req, res) => {
    res.send(courses);
});

// category headers 
app.get('/category', (req, res) => {
    res.send(category);
});



// category news courses all 
app.get('/course/:category', (req, res) => {
    const category = req.params.category;
    const categoryCourse = courses.filter(course => course.category === category);
    res.send(categoryCourse);
});

// only one single courses details add 
app.get('/course/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const idCourse = courses.find(course => course.id === id);
    res.send(idCourse);
});


// language and framework 
app.get('/maincategory/:maincategory', (req, res) => {
    const mainCategory = req.params.maincategory;
    const mainCategoryCourse = courses.filter(course => course.mainCategory === mainCategory);
    res.send(mainCategoryCourse);
});




app.listen(port, () => {
    console.log(`programmers-home-server running ok ${port}`);
});