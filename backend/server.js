const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// Handling uncaught excpetion
process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1);
})

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

// Connect to database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running and working on port ${process.env.PORT}`);
});

// Unhandled promise rejections
process.on("unhandledRejection", err => {
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejections");
    server.close(() => {
        process.exit(1);
    });
})