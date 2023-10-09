const express = require("express");
const cors = require("cors");
const errorHandler = require("./utils/errorHandler");
const helmet = require("helmet");
const path = require("path");
const router = require("./routes");

const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);
app.get('/', (req, res) => {
    return res.send("Welcome to express!");
})

// Middlewares after routes
app.use(errorHandler);


module.exports = app