const express = require('express');

const config = require('./config');

const setupViewEngine = require('./config/viewEngine');
const app = express();

setupViewEngine(app);

// require('./config/viewEngine')(app) - alternative option for the above

app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(config.PORT, () => console.log(`Server is now running on port ${config.PORT}...`));