const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Purchase = sequelize.define('purchase', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Purchase;