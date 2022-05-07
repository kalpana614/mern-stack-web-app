const mongodbConfig = require("../../../config/mongodb");

module.exports.add = async (user) => {
  const collection = mongodbConfig.getCollection("user");
  try {
    await collection.insertOne({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (err) {
    console.log(err);
    return 0;
  }
  return 1;
};
