const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    // location id 
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'location',
            key: 'id',
        }
    },
    // traveler id 
    traveler_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'traveler',
            key: 'id',
        }
    },     
    // trip budget FLOAT
    trip_budget: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    // traveler amount 
    traveler_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, 
{
        sequelize,
        freezeTableName: true, 
        timestamps: false,
        modelName: 'trip'
});

module.exports = Trip;