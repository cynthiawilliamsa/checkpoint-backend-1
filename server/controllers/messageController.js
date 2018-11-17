const messageModel = require("../models/messageModel");
module.exports.list =  function list(req, res) {
    messageModel.find().exec().then((messages)=>{
        return res.json(messages);
    });   
}
module.exports.create = function (req, res) {
    const m = new messageModel({
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    });
    m.save().then(savedMessage => {
       return res.json(savedMessage);
    });
}
