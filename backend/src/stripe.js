// const stripe = require('stripe');
// const config = stripe(process.env.STRIPE_SECRET);
// module.exrpots = config;

module.exports = require("stripe")(process.env.STRIPE_SECRET);
