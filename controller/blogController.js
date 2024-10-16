const Blog = require('../model/blogMode');

exports.createBlog = async (req, res) => {
  try {
    console.log(req.body);
    // const newBlog = new Blog(req.body)
    // newBlog.save();

    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        blog: newBlog,
      },
    });
  } catch (err) {
    res.status(400).json({
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
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    // const blog = await Blog.findOne({ _id: req.params.id });
    // const blog = await Blog.findOne({ naslov: req.params.naslov });

    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // const blog = await Blog.findOneAndUpdate({ slug: req.params.slug }, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    res.status(201).json({
      status: 'success',
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    // await Blog.findOneAndDelete({ naslov: req.params.naslov });
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
