const router = require('express').Router();

function isAuthorized(req, res, next) {
    if(req.user) {
        next();
    }
    else {
        res.redirect('/');
    }
}

router.get('/', isAuthorized, (req, res) => {
    res.render('dashboard', {
        username: req.user.username,
        discordId: req.user.discordId,
        guilds: req.user.guilds
    });
});

router.get('/settings', isAuthorized, (req, res) => {
    res.send(200);
});

module.exports = router;