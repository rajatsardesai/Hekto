const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

// Create product -- Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
    let images = [];

    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    };

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "products",
            format: "webp"
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    };

    req.body.images = imagesLinks;
    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
        message: "New product created successfully!!"
    });
});

// Get all products
exports.getAllProducts = catchAsyncError(async (req, res) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    });
});

// Get filtered products
exports.getFilteredProducts = catchAsyncError(async (req, res) => {
    // throw new Error("THis is new error");
    const resultPerPage = 6;
    const productsCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter();
    let products = await apiFeature.query;
    const filteredProductsCount = products.length;

    // For category
    const categoryApiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    products = await categoryApiFeature.query;
    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount
    });
});

// Get all products (Admin)
exports.getAdminProducts = catchAsyncError(async (req, res, next) => {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
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
        product
    });
    // throw new Error("THis is new error");
});

// Update products -- Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    };

    let images = [];

    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    };

    if (images !== undefined) {
        // Deleting images from cloudinary
        for (let i = 0; i < product.images.length; i++) {
            await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        };

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "products",
                format: "webp"
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        };

        req.body.images = imagesLinks;
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
        success: true,
        product,
        message: "Product updated succcessfully!"
    })
});

// Delete products -- Admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    };

    // Deleting images from cloudinary
    for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    };

    await product.deleteOne();
    res.status(200).json({
        success: true,
        message: "Product deleted successfully!"
    })
});

// Create or update product review
exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        avatar: req.user.avatar.url,
        rating: Number(rating),
        comment
    };

    const product = await Product.findById(productId);

    // const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString());

    // if (isReviewed) {
    //     product.reviews.forEach(rev => {
    //         if (rev.user.toString() === req.user._id.toString()) {
    //             rev.rating = Number(rating);
    //             rev.comment = comment;
    //         }
    //     })
    // } else {
    product.reviews.push(review);
    product.numberOfReviews = product.reviews.length
    // };

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

    let ratings = 0;
    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / product.reviews.length;
    }

    const numberOfReviews = reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numberOfReviews
    });

    res.status(200).json({
        success: true,
        message: "Review deleted successfully!!"
    })
});