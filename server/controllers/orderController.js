const orderModel = require("../models/orderModel");
module.exports.list =  function list(req, res) {
    orderModel.find().exec().then((orders)=>{
        return res.json(orders);
    });   
}
module.exports.create = function (req, res) {
    const o = new orderModel({
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount
    });
    o.save().then(savedOrder => {
       return res.json(savedOrder);
    });
}