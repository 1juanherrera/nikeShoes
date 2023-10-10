const express = require("express");
const userRouter = require("./UserRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./ProductRouter");
const productImgRouter = require("./ProductImgRouter");
const cartRouter = require("./cartRouter");
const purchaseRouter = require("./PurchaseRouter");

const router = express.Router();

// Routes
router.use("/users", userRouter);
router.use("/categories", categoryRouter);
router.use("/products", productRouter);
router.use("/products_imgs", productImgRouter);
router.use("/carts", cartRouter);
router.use("/purchases", purchaseRouter);

module.exports = router