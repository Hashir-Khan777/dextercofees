const express = require("express");
const AuthRouter = require("./auth.routes");
const ContactRouter = require("./contact.routes");
const ProductRouter = require("./product.routes");

const AppRouter = express.Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/contact", ContactRouter);
AppRouter.use("/products", ProductRouter);

module.exports = AppRouter;
