const { getAll, create, update, remove } = require("../controllers/productImgController");
const express = require("express");
const upload = require("../utils/multer");
const verifyJWT = require("../utils/verifyJWT"); 

const productImgRouter = express.Router();

productImgRouter.route("/")
    .get(getAll)
    .post(upload.single("image"), create)

productImgRouter.route("/:id")
    .delete(verifyJWT, remove)
    .put(update);

module.exports = productImgRouter;