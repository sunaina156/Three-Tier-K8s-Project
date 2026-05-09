const mongoose = require("mongoose");

module.exports = async () => {
    try {

        // Read credentials from Kubernetes Secrets (env variables)
        const username = process.env.MONGO_USERNAME;
        const password = process.env.MONGO_PASSWORD;

        // MongoDB service inside cluster
        const host = process.env.MONGO_HOST || "mongo-service";
        const dbName = process.env.MONGO_DB || "todo";

        // Build secure MongoDB connection string
        const mongoURI =
            `mongodb://${username}:${password}@${host}:27017/${dbName}?authSource=admin`;

        // Mongoose connection options
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(mongoURI, connectionParams);

        console.log("✅ Connected to database successfully.");

    } catch (error) {
        console.log("❌ Could not connect to database.", error);
    }
};