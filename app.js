//!npm install mongoose
const express = require('express');
const database = require('./database/database');
const blogcontroller = require('./controller/blogController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database.connectToDatabase();

app.get('/blogs', blogcontroller.getAllBlogs);
app.post('/blogs', blogcontroller.createBlog);

app.listen(10000, (err) => {
  if (err) return console.log('App running on port 10000');
  console.log('Server successfully started on port 10000');
});
