const config = {
    production: {
        PORT: 1234,
        DB_URI: 'mongodb://127.0.0.1:27017/cubicle', //the name of the DB comes after the slash
        SECRET: "SOMEPRODSECRET",
    },
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://127.0.0.1:27017/cubicle', //the name of the DB comes after the slash
        SECRET: "SOMEDEVSECRET"
        }
};

module.exports = config[process.env.node_env || 'development'];