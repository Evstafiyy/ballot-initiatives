const router = require("express").Router();

const authRoutes = require("./api/auth.routes");
const tokensRoutes = require("./api/tokens.routes");
const initRoutes = require('./api/initiatives.routes')
const voteRoutes = require('./api/votes.routes')

router.use("/auth", authRoutes);
router.use("/tokens", tokensRoutes);
router.use("/initiatives", initRoutes)
router.use("/votes", voteRoutes)

module.exports = router;
