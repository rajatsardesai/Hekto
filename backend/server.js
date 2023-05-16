const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling uncaught expection
process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    server.close(() => {
        process.exit(1);
    });
})

// Config
dotenv.config({ path: "backend/config/config.env" });

// Connect to database
connectDatabase();

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