const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const generateTokens = require("../../utils/authUtils");
const jwtConfig = require("../../config/jwtConfig");

router.post("/registration", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (fullName.trim() === "" || email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }

    const userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      res
        .status(400)
        .json({ message: "Такой пользователь уже зарегестрирован" });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ fullName, email, password: hashPassword });

    delete user.password;

    const { accessToken, refreshToken } = generateTokens({ user });

    console.log(accessToken, refreshToken);
    if (user) {
      res
        .status(201)
        .cookie("refresh", refreshToken, { httpOnly: true })
        .json({ message: "success", user, accessToken });
      return;
    }

    res.status(400).json({ message: "Что-то пошло не так" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isCompare = await bcrypt.compare(password, user.password);
      if (isCompare) {
        delete user.password;

        const { accessToken, refreshToken } = generateTokens({ user });
        console.log(refreshToken);
        res
          .status(200)
          .cookie("refresh", refreshToken, { httpOnly: true })
          .json({ message: "success", accessToken, user });
        return;
      }
      res.status(400).json({ message: "email или пароль не совпадают" });
      return;
    }

    res.status(400).json({ message: "email или пароль не совпадают" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/logout", (req, res) => {
  res.locals.user = undefined;
  res.status(200).clearCookie("refresh").json({ message: "success" });
});
module.exports = router;
