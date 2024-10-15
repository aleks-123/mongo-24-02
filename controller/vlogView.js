const Blog = require('../model/blogMode');

// /blog
exports.getBlogView = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).render('blogs', {
      blogs: blogs,
      title: 'All blogs',
      godina: '2024',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
//  /blog/:id
exports.getSingleBlogView = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('singleBlog', { blog });
};
