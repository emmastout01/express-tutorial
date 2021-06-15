const mongoose = require('mongoose');

const { Schema } = mongoose;

const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100},
});

GenreSchema
.virtual('url')
.get(() => `catalog/genre/ ${this._id}`);

module.exports = mongoose.connect('Genre', GenreSchema);