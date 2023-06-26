const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const errorMiddleware = require("./middleware/error");

// Config
dotenv.config({ path: "backend/config/config.env" });

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


// Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;