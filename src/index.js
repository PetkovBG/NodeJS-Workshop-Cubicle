const express = require('express');

const routes = require('./routes');

const config = require('./config');

const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseInit');
const app = express();

setupViewEngine(app);

// require('./config/viewEngine')(app) - alternative option for the above

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routes);

initDatabase()
.then(() => app.listen(config.PORT, () => console.log(`Server is now running on port ${config.PORT}...`)))
.catch((err) => console.log(err.message));

