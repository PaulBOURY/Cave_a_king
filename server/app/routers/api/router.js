const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const demoRouter = require("./demo/router")

router.use("/items", itemsRouter);
router.use("/demo", demoRouter);

/* ************************************************************************* */

module.exports = router;
