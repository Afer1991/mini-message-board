const { Router } = require("express");

const formRouter = Router();

formRouter.get("/", (req, res) => {
  res.render("form");
});

formRouter.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.end();
});

module.exports = formRouter;