import { v4 as uuid } from "uuid";
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  sub_category: {
    type: String,
  },
  amount: {
    type: String,
  },
});
const productModel = new mongoose.model("Product", productSchema);

export const getProducts = async (req, res) => {
  console.log("dfdfdf");
  await productModel
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
export const getProductById = async (req, res) => {
  await productModel
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
export const saveProduct = (req, res) => {
  console.log("req from postman", req);
  const productUser = new productModel(req.body);
  productUser.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There is an error to insert!",
      });
    } else {
      res.status(200).json({
        message: "Product is inserted successfully",
      });
    }
  });
};
export const insertManyProduct = async (req, res) => {
  await productModel.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There is an error!",
      });
    } else {
      res.status(200).json({
        message: "Product are inserted successfully",
      });
    }
  });
};
export const deleteProduct = async (req, res) => {
  await productModel
    .deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There is an error!",
        });
      } else {
        res.status(200).json({
          message: "Product deleted succesfully",
        });
      }
    })
    .clone();
};

export const updateProduct = async (req, res) => {
  await productModel
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          category: req.body.category,
          sub_category: req.body.sub_category,
          amount: req.body.amount,
        },
      },
      (err) => {
        if (err) {
          res.status(500).json({
            error: "There is an error!",
          });
        } else {
          res.status(200).json({
            message: "Product are updated successfully",
          });
        }
      }
    )
    .clone();
};
