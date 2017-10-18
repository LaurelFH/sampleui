const router = require("express").Router();
const canvasRoutes = require("./canvas");

// Book routes
router.use("/", canvasRoutes);

module.exports = router;
