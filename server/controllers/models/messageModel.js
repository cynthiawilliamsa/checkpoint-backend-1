let mongoose = require("mongoose");
const schema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    date: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports =  mongoose.model("Message", schema);