const catchAsyncErrors = require("../middleware/catchAsyncError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res) => {
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
            company: "Hekto"
        }
    });

    res.status(200).json({
        success: true,
        client_secret: myPayment.client_secret
    });
})

exports.sendStripeApiKey = catchAsyncErrors(async (res) => {
    res.status(200).json({
        success: true,
        stripeApiKey: process.env.STRIPE_API_KEY
    });
})