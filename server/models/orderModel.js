let mongoose = require("mongoose");
const schema = new mongoose.Schema({
    id: {
        type: Number
    },
    orderDate: {
        type: String
    },
    orderTime: {
        type: String
    },
    amount: {
        type: String
    }
});

module.exports =  mongoose.model("Order", schema);