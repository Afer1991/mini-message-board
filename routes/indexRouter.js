const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/messages/:index", (req, res) => {
  const { index } = req.params;
  res.render("messageDetails", { message: messages[index - 1] });
});

indexRouter.post("/new", (req, res) => {
  messages.push({ id:messages.length + 1, text: req.body.message, user: req.body.username, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;