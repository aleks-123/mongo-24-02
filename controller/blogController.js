const Blog = require('../model/blogMode');

exports.createBlog = async (req, res) => {
  try {
    req.body(req.body);
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: 'success',
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};
