const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Traveler extends Model {}

Traveler.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize,
    freezeTableName: true, 
    timestamps: false
});

Model.exports = Traveler; 