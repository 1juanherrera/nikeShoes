const express = require("express");
const verifyJWT = require("../utils/verifyJWT");
const {  getAll, create, getOne, remove, update } = require("../controllers/categoryController");

const categoryRouter = express.Router();

categoryRouter.route("/")
    .get(getAll)
    .post(verifyJWT, create);

categoryRouter.route("/:id")
    .get(getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = categoryRouter

