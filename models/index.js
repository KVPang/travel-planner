const Traveler = require('./Traveler');
const Trip = require('./Trip');
const Location = require('./Location');

Traveler.hasMany(Trip);
Trip.belongsTo(Traveler);

Trip.belongsTo(Location);
Location.hasMany(Trip)

module.exports = {
    Traveler,
    Trip,
    Location
}