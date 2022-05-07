const mongoDBConfig = require("../../../config/mongodb");

exports.add = async (restaurant) => {
  const collection = mongoDBConfig.getCollection("Restaurant");
  try {
    await collection.insertOne({
      name: restaurant.name,
      location: restaurant.location,
      contact: restaurant.contact,
    });
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};
