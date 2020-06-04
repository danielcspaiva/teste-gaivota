const express = require("express");
const router = express.Router();
const controllers = require("../controllers/dataController");


router.get("/", controllers.getData);

module.exports = router;