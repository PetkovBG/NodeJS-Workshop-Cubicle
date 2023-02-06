const errorHandler = (err, req, res, next) => {
    console.log(err);

    res.redirect('/');
}

module.exports = errorHandler;