const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // title: String,
    title: {
        type: String
        // required: [true, "This field is required"],
        // maxlength: [50, "The title should be no longe than 50 characters"]
    },
    // price: Number,
    price: {
        type: Number,
    //     required: [true, "This field is required"],
    },
    // description: String
    description: {
        type: String,
    //     maxlength: [128, "Description should be no longer than 128 characters"]
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;