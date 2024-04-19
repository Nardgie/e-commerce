const router = require('express').Router();
const apiRoutes = require('./api');

// use the /api endpoint for all the routes in the api folder
router.use('/api', apiRoutes);

// if the route is not found, send an h1 tag with the message "Wrong Route!" to the client
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;