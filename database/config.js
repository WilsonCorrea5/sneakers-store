const mongoose = require("mongoose");

const dbConnection = async () => {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DBNAME } = process.env;

  const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/${MONGODB_DBNAME}?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

  try {
    await mongoose.connect(uri, {
      autoIndex: true,
    });
  } catch (error) {
    throw new Error("database connection failed");
  }
};
module.exports = {
  dbConnection,
};
