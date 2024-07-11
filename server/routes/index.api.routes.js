const indexRoute = require("express").Router();

const authRoute = require("./api/auth.routes");
const tokensRoute = require("./api/tokens.routes");

indexRoute.use("/auth", authRoute);
indexRoute.use("/tokens", tokensRoute);

module.exports = indexRoute;