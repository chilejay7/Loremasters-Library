const {Schema, model} = require('mongoose');

const bookSchema = new Schema (
    {
        title: {
            type: String,
            required: true,
            trim: true,
        }
    }
)