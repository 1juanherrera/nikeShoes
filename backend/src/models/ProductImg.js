const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const ProductImg = sequelize.define('productImg', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = ProductImg;