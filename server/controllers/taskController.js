const taskModel = require("../models/taskModel");
module.exports.list =  function list(req, res) {
    taskModel.find().exec().then((tasks)=>{
        return res.json(tasks);
    });   
}
module.exports.create = function (req, res) {
    const t = new taskModel({
        task: req.body.task,
        date: req.body.date
    });
    t.save().then(savedTask => {
       return res.json(savedTask);
    });
}