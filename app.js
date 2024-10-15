// npm install -g nodemon

//!npm install mongoose
const express = require('express');
const database = require('./database/database');
const blogcontroller = require('./controller/blogController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database.connectToDatabase();

app.get('/api/v1/blogs', blogcontroller.getAllBlogs);
app.post('/api/v1/blogs', blogcontroller.createBlog);
app.get('/api/v1/blogs/:id', blogcontroller.getBlog);
app.patch('/api/v1/blogs/:id', blogcontroller.updateBlog);
app.delete('/api/v1/blogs/:id', blogcontroller.deleteBlog);

// app.get('/blogs', blogViewver.get)
//

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log('Server successfully started on port 10000');
});

// 200 OK; The request was successfull, and the server returned the requested data
// 201 Created; The request was successfuly, and a new resuorce has been created on the server.
// 204 OK; The request was successfull, and the server is not returning the data
// 400 Bad request. The request was malformed or invalid and could not be understood by the server.
// 401 Unathorazed
// 403 Forbidden
// 404 not found,
// 500 Internal server error
