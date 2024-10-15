const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  naslov: {
    type: String,
    required: [true, 'Poleto mora da sorzi naslov'],
  },
  tekst: {
    type: String,
    required: [true, 'Mora da ima tekst'],
  },
  ocenka: {
    type: Number,
  },
  avtor: {
    type: String,
    default: 'Annonimus',
  },
  vreme: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
