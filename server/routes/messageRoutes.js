let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/messageControllers");

router.get("/state/messages", list);
router.get("/state/messages/:id", show);
router.post("/state/messages", create);
router.put("/comments/:id", update);
router.delete("/comments/:id", remove);

module.exports =  router;