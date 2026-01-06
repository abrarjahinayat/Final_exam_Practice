const slugify = require("slugify");
const productModel = require("../model/product.model");
const fs = require("fs");
const path = require("path");

const addproductControllers = async (req, res) => {
  try {
    let {
      title,

      description,

      variantType,
    } = req.body;
    let image = req.files;

    const imagePaths = req.files.map((item) => {
      return `${process.env.SERVER_URL}/${item.filename}`;
    });

    let slug = slugify(title, {
      replacement: "-",
      remove: undefined,
      lower: true,
      trim: true,
    });
    if (!title || !variantType || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    } else {
      let addproduct = await new productModel({
        title,
        description,

        image: imagePaths,
        slug,

        variantType,
      });
      await addproduct.save();
      return res.status(201).json({
        success: true,
        message: "Product added successfully",
        data: addproduct,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message || error,
    });
  }
};

const getallproductControllers = async (req, res) => {
  try {
    let products = await productModel
      .find({})
      .populate({ path: "variants", select: "size color stock _id" });
    return res.status(200).json({
      success: true,
      message: "All Product fetched successfully",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message || error,
    });
  }
};

module.exports = {
  addproductControllers,
  getallproductControllers,
};
