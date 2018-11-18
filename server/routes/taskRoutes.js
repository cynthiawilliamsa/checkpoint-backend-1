let express =  require("express");
const router = express.Router();
let {list,create} = require( "../controllers/taskController");

router.get("/tasks", list);
router.post("/tasks", create);

module.exports =  router;