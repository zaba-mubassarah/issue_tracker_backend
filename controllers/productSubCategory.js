import { v4 as uuid } from "uuid";
import mongoose from "mongoose";
import { productCategoryModel } from "./productCategory.js";

const dataSchema = mongoose.Schema({
  title: {
    type: String,
  },
  category_id: {
    type: String,
  },
});
const dataModel = new mongoose.model("ProductSubCategory", dataSchema);

export const getProductSubCategory = async (req, res) => {
  await dataModel
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
export const getProductSubCategoryId = async (req, res) => {
  await dataModel
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
export const saveProductSubCategory = async (req, res) => {
  const newSubCategory = new dataModel(req.body);
  console.log("newSubCategory", newSubCategory);

  if (req.body.category_id.length != 24) {
    res.status(500).json({
      error: "id must be 24 character",
    });
  } else {
    await productCategoryModel
      .findById(req.body.category_id)
      .then((response) => {
        if (response != null) {
          newSubCategory.save((err) => {
            if (err) {
              res.status(500).json({
                error: "There is an error to insert!",
              });
            } else {
              res.status(200).json({
                message: "Sub Category is inserted successfully",
              });
            }
          });
        } else {
          res.status(404).json({
            error: "data not found agaist the category id",
          });
        }
      });
  }
};
export const insertManyProductSubCategory = async (req, res) => {
  await dataModel.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There is an error!",
      });
    } else {
      res.status(200).json({
        message: "Data are inserted successfully",
      });
    }
  });
};
export const deleteProductSubCategory = async (req, res) => {
  await dataModel
    .deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There is an error!",
        });
      } else {
        res.status(200).json({
          message: "Data deleted succesfully",
        });
      }
    })
    .clone();
};

export const updateProductSubCategory = async (req, res) => {
  await dataModel
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          category_id: req.body.category_id,
        },
      },
      (err) => {
        if (err) {
          res.status(500).json({
            error: "There is an error!",
          });
        } else {
          res.status(200).json({
            message: "Data updated successfully",
          });
        }
      }
    )
    .clone();
};
