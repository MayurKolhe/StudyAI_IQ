const express = require("express");
const { registerContoller, logoutController, loginController } = require("../controllers/authController");



const router = express.Router();


router.post("/register", registerContoller);

router.post("/login", loginController);

router.post("/logout", logoutController);


module.exports = router;

