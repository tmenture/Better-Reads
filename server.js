const express = require('express');
const routes = require('./controllers');

// Imports Sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.JAWSDB || 3001;

// Midleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Syncs sequelize modules to the database and turns on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});