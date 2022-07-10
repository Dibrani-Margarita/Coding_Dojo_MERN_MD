const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    },
    __v: {
        type: Number
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;