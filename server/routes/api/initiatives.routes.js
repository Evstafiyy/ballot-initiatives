const initRoutes = require("express").Router();
const { Initiatives } = require("../../db/models")

initRoutes.get("/", async (req, res) => {
    try {
      const initiatives = await Initiatives.findAll();
      res.status(200).json({ message: "success", initiatives });
	} catch (error) {
		 console.log(111111);
      res.status(500).json(error);
    }
  });

  initRoutes.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
      const initiative = await Initiatives.findOne({where: {id}});
      res.status(200).json({ message: "success", initiative });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  initRoutes.post("/", async (req, res) => {
    try {
      const result = await Initiatives.create(req.body);
      res.status(201).json(result);
    } catch ({error}) {
      res.send("Ошибка", {error});
    }
  });

  initRoutes.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Initiatives.update(req.body, { where: { id } });
    } catch (error) {
      res.send("Ошибка");
    }
  });

  initRoutes.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Initiatives.destroy({ where: { id } });
    } catch (error) {
      res.send("Ошибка");
    }
  });

module.exports = initRoutes



