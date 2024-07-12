const initRoutes = require("express").Router();
const { Initiatives } = require("../../db/models");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

initRoutes.get("/", async (req, res) => {
  try {
    const initiatives = await Initiatives.findAll({
      order: [["id", "ASC"]],
    });
    res.status(200).json({ message: "success", initiatives });
  } catch (error) {
    console.log(111111);
    res.status(500).json(error);
  }
});

initRoutes.get("/:id", async (req, res) => {
  try {
    const { user } = res.locals;

    const { id } = req.params;
    const initiative = await Initiatives.findOne({ where: { id } });
    res.status(200).json({ message: "success", initiative });
  } catch (error) {
    res.status(500).json(error);
  }
});

initRoutes.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { title, description } = req.body;

    const initiative = await Initiatives.create({
      title,
      description,
      userId: user.id,
    });

    if (initiative) {
      res.status(201).json({ message: "success", initiative });
      return;
    }

    res.status(400).json({ message: "что то пошло не по плану " });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

initRoutes.put("/:id", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { id } = req.params;
    const { title, description } = req.body;

    const result = await Initiatives.update(
      { title, description },
      {
        where: { id, userId: user.id },
      }
    );

    if (result[0] > 0) {
      const initiative = await Initiatives.findOne({
        where: { id: id, userId: user.id },
      });
      res.status(200).json({ message: "success", initiative });
    } else {
      res.status(400).json({ message: "Failed to delete vote" });
    }
  } catch (error) {
    res.send("Ошибка");
  }
});

initRoutes.delete("/:id", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { id } = req.params;
    const result = await Initiatives.destroy({
      where: { id, userId: user.id },
    });

    if (result > 0) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Failed to delete vote" });
    }
  } catch (error) {
    res.send("Ошибка");
  }
});

module.exports = initRoutes;
