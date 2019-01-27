const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const movieSchema = new Schema({
    title: String,
    id: Number,
    img: String,
    category: String
});

let Movie = mongoose.model('movie',movieSchema);
module.exports = Movie;