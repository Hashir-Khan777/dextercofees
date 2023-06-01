const express = require("express");
const AuthRouter = require("./auth.routes");

const AppRouter = express.Router();

AppRouter.use("/auth", AuthRouter);

module.exports = AppRouter;
