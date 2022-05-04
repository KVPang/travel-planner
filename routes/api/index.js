const router = require('express').Router();
const travelerRoutes = require('./traveler-routes')
const tripRoutes = require('./trip-routes')
const locationRoutes = require('./locationRoutes')

router.use('/traveler', travelerRoutes);
router.use('/trip', tripRoutes);
router.use('/location', locationRoutes);

module.exports = router;