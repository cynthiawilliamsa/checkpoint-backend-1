let express =  require("express");
const router = express.Router();
let {list,create} = require( "../controllers/orderController");

router.get("/orders", list);
router.post("/orders", create);

module.exports =  router;