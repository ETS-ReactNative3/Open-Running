const passport = require("passport");
const session = require("express-session")({ secret: "kdlskdfjwieroewri92384", resave: false, saveUninitialized: false });
const localStrategy = require("./local-strategy.js");
const User = require("../models").User;

const serializeUser = (user, done) => {
    // TODO
}

const deserializeUser = (savedId, done) => {
    // TODO
}

module.exports = (app) => {
    passport.use(localStrategy);
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    app.use(session);
    app.use(passport.initialize());
    app.use(passport.session());
    return passport;
}