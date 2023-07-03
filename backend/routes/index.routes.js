const express = require("express");
const AuthRouter = require("./auth.routes");
const ContactRouter = require("./contact.routes");
const ProductRouter = require("./product.routes");
const UserRouter = require("./user.routes");

const AppRouter = express.Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/contact", ContactRouter);
AppRouter.use("/products", ProductRouter);
AppRouter.use("/users", UserRouter);

module.exports = AppRouter;
