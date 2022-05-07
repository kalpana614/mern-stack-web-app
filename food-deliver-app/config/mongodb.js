//connect to Mongodb database.

const mongodb = require("mongodb");

const mongoDbClient = mongodb.MongoClient;

const url =
  "mongodb+srv://kalpana:kalpana14@cluster0.uuc2p.mongodb.net/foodDeliveryAppDB?retryWrites=true&w=majority";
var client;
exports.connect = async () => {
  try {
    client = await mongoDbClient.connect(url);
    console.log("Db is connected");
  } catch (err) {
    console.log(err);
  }
};

exports.getCollection = (collectionName) => {
  return client.db("foodDeliveryAppDB").collection(collectionName);
};
