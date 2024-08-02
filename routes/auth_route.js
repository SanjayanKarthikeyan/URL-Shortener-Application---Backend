const router = require("express").Router();

const emailActivationHandler = require("../controllers/public/emailActivation_controller");
const forgotPasswordHandler = require("../controllers/public/forgotPassword_controller");
const resetPasswordHandler = require("../controllers/public/resetPassword_controller");
const signinHandler = require("../controllers/public/signIn_controller");
const signupHandler = require("../controllers/public/signUp_controller");

router.get("/", (req, res) => {
  res.json("Auth Working");
});

router.post("/signup", signupHandler); 
router.post("/signin", signinHandler);
router.post("/forgot-password", forgotPasswordHandler); 
router.post("/reset-password", resetPasswordHandler); 
router.post("/emailActivation", emailActivationHandler); 

module.exports = router;