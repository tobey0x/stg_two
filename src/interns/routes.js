const { Router } = require("express");
const controller = require("./controller")

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:user_id", controller.getUserById);
router.put("/:user_id", controller.updateUser);
router.delete("/:user_id", controller.deleteUser);

module.exports = router;