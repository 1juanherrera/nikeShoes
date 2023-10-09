const express = require("express");
const userRouter = require("./UserRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./ProductRouter");
const router = express.Router();

// Routes
router.use("/users", userRouter);
router.use("/categories", categoryRouter);
router.use("/products", productRouter);

module.exports = router