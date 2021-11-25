require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const discordStrategy = require('./strategies/discordstrategy');
const db = require('./database/database');
const Sentry = require('@sentry/node');
const path = require('path');
const mongoose = require('mongoose');

// Sentry
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.ENVIRONMENT,
    tracesSampleRate: 1.0
})

app.use(Sentry.Handlers.errorHandler());

// MongoDB
db.then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

// Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');

app.use(session({
    secret: '6&T3K2<3mwncu(w&',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    resave: false,
    name: 'discord.oauth2',
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Passport

app.use(passport.initialize());
app.use(passport.session());

// Middleware Routes
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute)

app.get('/', isAuthorized, (req, res) => {
    res.render('home', {
        users: [
            { name: 'Anson', email: 'anson@gmail.com' },
            { name: 'Ethan', email: 'ethan@gmail.com' },
            { name: 'Calvin', email: 'calvin@gmail.com' }
        ]
    });
});

function isAuthorized(req, res, next) {
    if(req.user) {
        console.log("User is logged in");
        res.redirect('/dashboard')
    }
    else {
        console.log("User is not logged in.");
        next();
    }
}

app.listen(PORT, () => {
    console.log(`Now listening to requests on port ${PORT}`);
});