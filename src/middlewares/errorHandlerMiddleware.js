const errorHandler = (err, req, res, next) => {
    console.log(err.message);

    //we can add status res.status as well
    res.render('404', {error: err.message});
}

module.exports = errorHandler;