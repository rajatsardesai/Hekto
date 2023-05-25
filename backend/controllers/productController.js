const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");

// Create product -- Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});

// Get all products
exports.getAllProducts = catchAsyncError(async (req, res) => {

    throw new Error("THis is new error");
    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products,
        productCount
    });
});

// Get all product details
exports.getProductDetails = catchAsyncError(async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        product,
        productCount
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

// Create or update product review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString());

    if (isReviewed) {
        product.reviews.forEach(rev => {
            if (rev.user.toString() === req.user._id.toString()) {
                rev.rating = Number(rating);
                rev.comment = comment;
            }
        })
    } else {
        product.reviews.push(review);
        product.numberOfReviews = product.reviews.length
    };

    // For average rating (indicated as stars)
    let avg = 0;
    product.ratings = product.reviews.forEach(rev => avg += rev.rating);
    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "Review created"
    })
});

// Get all reviews of a product
exports.getProductReviews = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
});

// Delete review
exports.deleteProductReview = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // if (rev.user.toString() === req.user._id.toString()) {
    const reviews = product.reviews.filter(rev => rev._id.toString() !== req.query.id.toString());

    // For average rating (indicated as stars)
    let avg = 0;
    reviews.forEach(rev => avg += rev.rating);
    const ratings = avg / product.reviews.length;

    const numberOfReviews = reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numberOfReviews
    });

    res.status(200).json({
        success: true,
        message: "Review deleted"
    })
});