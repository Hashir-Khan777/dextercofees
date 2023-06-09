const express = require("express");
const { UserModel } = require("../models/index.models");
const { JwtService } = require("../services/index.service");

const UserRouter = express.Router();

UserRouter.get("/", JwtService.isAdmin, async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

UserRouter.put("/create/admin/:_id", JwtService.isAdmin, async (req, res) => {
  try {
    const { _id } = req.params;
    await UserModel.findOneAndUpdate({ _id }, { role: "admin" }, { new: true });
    const users = await UserModel.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

UserRouter.put("/remove/admin/:_id", JwtService.isAdmin, async (req, res) => {
  try {
    const { _id } = req.params;
    await UserModel.findOneAndUpdate({ _id }, { role: "user" }, { new: true });
    const users = await UserModel.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = UserRouter;
