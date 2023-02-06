const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const config = require('./config');

const authMiddleware = require('./middlewares/authMiddleware');

const errorHandler = require('./middlewares/errorHandlerMiddleware');

const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseInit');
const app = express();

setupViewEngine(app);

// require('./config/viewEngine')(app) - alternative option for the above

app.use(express.static('src/public'));
app.use(cookieParser());

app.use(express.urlencoded({extended: false}));
app.use(authMiddleware.authentication);
app.use(routes);

//we put Error handler after the routes
app.use(errorHandler);

initDatabase()
.then(() => app.listen(config.PORT, () => console.log(`Server is now running on port ${config.PORT}...`)))
.catch((err) => console.log(err.message));

