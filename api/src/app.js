const express = require('express');
const countryRoutes = require('./routes/countryRoutes');
 const app = express();

app.use(express.json());


app.use('/api/countries', countryRoutes);

module.exports = app;
