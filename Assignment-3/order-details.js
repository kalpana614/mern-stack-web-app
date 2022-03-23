//2.Order details for punjabi Tadka restaurant in Delhi
const orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};
//2a.
const total = Object.values(orderData).reduce((prev, next) => prev + next);
console.log("The number of orders placed" + " = " + total);
//2b.
const options = Object.keys(orderData);
console.log("The number of order proportions" + " = " + options.length);
//2c.
const response = options.map((item, index) => {
  return {
    id: index + 1,
    order: item,
    "order percentage": ((orderData[item] / total) * 100).toFixed(2),
    restaurant: "Punjabi Tadka",
  };
});
console.log(response);
