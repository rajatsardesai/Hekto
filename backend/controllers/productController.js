const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

// Create product -- Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});

// Get all products
exports.getAllProducts = catchAsyncError(async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
});

// Update products -- Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
        success: true,
        product
    })
});

// Delete products -- Admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    await product.deleteOne();
    res.status(200).json({
        success: true,
        message: "Product deleted"
    })
});