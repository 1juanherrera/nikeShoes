const express = require("express");
const verifyJWT = require("../utils/verifyJWT");
const { getAll, create, getOne, remove, update, setProductsImages } = require("../controllers/productController");

const productRouter = express.Router();

productRouter.route("/")
    .get(getAll)
    .post(create);

productRouter.route("/:id")
    .get(getOne)
    .delete(remove)
    .put(verifyJWT, update);

productRouter.route(":id/images")
    .post(setProductsImages)

module.exports = productRouter