const mongoose = require("mongoose");

const connectToMongo = () => {
    mongoose.connect(process.env.DB_URI).then(data => console.log(`Connected to mongo sucessfully ${data.connection.host}`));
};

module.exports = connectToMongo;