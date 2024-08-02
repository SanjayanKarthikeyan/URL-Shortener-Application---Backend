const router = require("express").Router();

const analysisUrlHandler = require("../controllers/private/analysis_Controller");
const createShortUrlHandler = require("../controllers/private/createShortUrl_controller");
const getAllUrlHandler = require("../controllers/private/getAll_controller");

const authorizationMiddleWareFunc = require("../middleware/authorizationMiddleWare");

router.get("/getAll", authorizationMiddleWareFunc, getAllUrlHandler);

router.get("/analysis", authorizationMiddleWareFunc, analysisUrlHandler);

router.post(
  "/createShortUrl",
  authorizationMiddleWareFunc,
  createShortUrlHandler
); 

module.exports = router;