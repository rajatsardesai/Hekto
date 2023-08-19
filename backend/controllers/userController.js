const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

// Register user
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const cloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
        format: "webp"
    })

    const { name, email, password } = req.body;

    const isEmailMatch = await User.findOne({ email });
    if (isEmailMatch) {
        return next(new ErrorHandler("Email already exists", 401));
    };

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: cloud.public_id,
            url: cloud.secure_url
        }
    });

    sendToken(user, 201, res);
});

// Login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please provide email and password", 400));
    };
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    };
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid email or password", 401));
    };

    sendToken(user, 200, res);
});

// Logout user
exports.logoutUser = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
});

// Forgot password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return next(new ErrorHandler("Please provide email", 400));
    };

    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("Invalid email", 401));
    };

    // Get reset password token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetURL = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

    const message = `Your password request token is :- \n\n ${resetURL} \n\nIf you have not requested this email, Please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: "Hekto Password Recovery",
            message
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        });
    } catch (error) {
        user.getResetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
});

// Reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    // creating hash token
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now()
        }
    });
    if (!user) {
        return next(new ErrorHandler("Reset Password token is Invalid or has been expired", 400));
    };
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password cannot be changed", 400));
    };
    // Set new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.status(200).json({
        success: true,
        message: "Password Changed Successfully"
    });
});

// Get user details
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    });
});

// Update user password
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatch = await user.comparePassword(req.body.oldPassword);
    if (!isPasswordMatch) {
        return next(new ErrorHandler("Old password is incorrect", 400));
    };

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
});

// Update user profile
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    await User.findByIdAndUpdate(req.user.id, newUserData);

    res.status(200).json({
        success: true,
        message: "Profile Updated Successfully"
    });
});

// Get all users for (admin)
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    });
});

// Get a single user for (admin)
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User not found with id: ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        user
    });
});

// Update user role
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User does not exists with the id: ${req.params.id}`, 400));
    };

    await User.findByIdAndUpdate(req.params.id, newUserData);

    res.status(200).json({
        success: true,
        message: "User Update Successfully!!"
    });
});

// Delete user
exports.deleteUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User does not exists with the id: ${req.params.id}`, 400));
    };

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    await user.deleteOne();

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
});