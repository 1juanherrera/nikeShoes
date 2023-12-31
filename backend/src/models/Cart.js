const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Cart = sequelize.define("cart", {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Cart;