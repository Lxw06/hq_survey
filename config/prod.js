// prod keys auth_server
module.exports = {
  //Smaily-dev
  googleClientID: process.env.GOOGLE_CLIENT_ID,

  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // project 0 for test purpose, free
  mongoURI: process.env.MONGO_URI,

  cookieKey: process.env.COOKIE_KEY,

  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
