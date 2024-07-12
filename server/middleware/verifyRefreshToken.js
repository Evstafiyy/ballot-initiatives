const jwt = require('jsonwebtoken');
const { User } = require('../db/models');
require("dotenv").config()

async function verifyRefreshToken(req, res, next) {
  try {
  
    const { refresh } = req.cookies;
    let { user } = jwt.verify(refresh, process.env.R);
 
    user = await User.findOne({
      where: { id: user.id },
      attributes: ['id', 'fullName', 'email'],
    });

    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid refresh token');
    res.clearCookie('refreshToken').sendStatus(401);
  }
}

module.exports = verifyRefreshToken;
