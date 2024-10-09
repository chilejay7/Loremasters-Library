const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  authors: [
    {
      type: String,
      required: true,
    },
  ],
  category: [
    {
      type: String,
    },
  ],
  publishedDate: {
    type: Date,
  },
  publisher: {
    type: String,
  },
  pageCount: {
    type: Number,
  },
});

const Book = model('Book', bookSchema);

module.exports = Book;