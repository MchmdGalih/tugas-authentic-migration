const express = require("express");
const { signUp, signIn } = require("../controllers/authController");
const { checkUserEmail } = require("../controllers/verifyUser");

const router = express.Router();

router.post("/auth/signup", checkUserEmail, signUp);
router.post("/auth/signin", signIn);

module.exports = router;
