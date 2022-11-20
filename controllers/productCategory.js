import { v4 as uuid } from "uuid";
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
  },
});
export const productCategoryModel = new mongoose.model(
  "ProductCategory",
  productSchema
);

export const getProductCategory = async (req, res) => {
  await productCategoryModel
    .find({}, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There is an error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Success",
        });
      }
    })
    .clone();
};
export const getProductCategoryId = async (req, res) => {
  await productCategoryModel
    .find({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There is an error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Success",
        });
      }
    })
    .clone();
};
export const saveProductCategory = (req, res) => {
  const newCategory = new productCategoryModel(req.body);
  newCategory.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There is an error to insert!",
      });
    } else {
      res.status(200).json({
        message: "Category is inserted successfully",
      });
    }
  });
};
export const insertManyProductCategory = async (req, res) => {
  await productCategoryModel.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There is an error!",
      });
    } else {
      res.status(200).json({
        message: "Category are inserted successfully",
      });
    }
  });
};
export const deleteProductCategory = async (req, res) => {
  await productCategoryModel
    .deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There is an error!",
        });
      } else {
        res.status(200).json({
          message: "Category deleted succesfully",
        });
      }
    })
    .clone();
};

export const updateProductCategory = async (req, res) => {
  await productCategoryModel
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
        },
      },
      (err) => {
        if (err) {
          res.status(500).json({
            error: "There is an error!",
          });
        } else {
          res.status(200).json({
            message: "Category are updated successfully",
          });
        }
      }
    )
    .clone();
};
