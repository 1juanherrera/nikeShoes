const app = require("./app");
const sequelize = require("./database/db");
require("./models");

const PORT = process.env.PORT || 4000;

const main = async() => {
    try {
        sequelize.sync({ force: false });
        console.log("DB connected");
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
}

main();