const Traveler = require("./Traveler.js");
const Trip = require("./Trip.js");
const Location = require("./Location.js");

Traveler.hasMany(Trip);
Trip.belongsTo(Traveler);

Trip.belongsTo(Location);
Location.hasMany(Trip)

module.exports = {
    Traveler,
    Trip,
    Location
}