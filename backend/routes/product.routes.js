const express = require("express");
const { ProductModel } = require("../models/index.models");
const {
  JwtService,
  CloudinaryService,
  MulterService,
} = require("../services/index.service");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await ProductModel.findOne({ _id });
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.post("/create", JwtService.isAdmin, async (req, res) => {
  try {
    await ProductModel.create(req.body);
    res.status(200).send({ message: "Product has been created successfully!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.put("/update/:_id", JwtService.isAdmin, async (req, res) => {
  try {
    const { _id } = req.params;
    await ProductModel.findOneAndUpdate({ _id }, req.body, { new: true });
    res.status(200).send({ message: "Product has been created successfully!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.put("/delete/:_id", JwtService.isAdmin, async (req, res) => {
  try {
    const { _id } = req.params;
    await ProductModel.findOneAndDelete({ _id });
    res.status(200).send({ message: "Product has been deleted!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.post(
  "/post/image",
  JwtService.isAdmin,
  MulterService.single("image"),
  async (req, res) => {
    try {
      const { path } = req.file;
      const image = await CloudinaryService.uploadImage(
        path,
        "products",
        1000,
        1000
      );
      res.status(200).send({ image });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

module.exports = ProductRouter;
