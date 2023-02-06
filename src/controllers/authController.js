//moduler route

const router = require('express').Router();

const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        console.log(token);
        res.cookie('auth', token, {httpOnly: true });
    } catch (err) {
        console.log(err.message);
        return res.render('auth/login', {error: err.message});
    }
    res.redirect('/');
});



router.get('/register', (req, res) => {
    res.render('auth/register')
});

router.post('/register', async (req, res, next) => {
    const {username, password, repeatPassword } = req.body;

    if(password !== repeatPassword) {
        // return next(new Error(`Password missmatch`));

        return res.render('auth/register', {error: 'Passord missmatch!'});
    }

    const existingUser = await authService.getUserByUsername(username);

    if(existingUser) {

        return res.redirect('/404'); 
    
    }

    const user = await authService.register(username, password);


    res.redirect('/login');

});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
})

module.exports = router;