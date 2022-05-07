//1.Javascript restaurantManager class
class restaurantManager {
  restaurantList = [
    {
      id: 1,
      restaurantName: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      restaurantName: "Domino",
      address: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      restaurantName: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      restaurantName: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
  ];

  printAllRestaurantNames = () => {
    return this.restaurantList.map((restaurant) => restaurant.restaurantName);
  };

  filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter(
      (restaurant) => restaurant.city == cityName
    );
  };
}

const restaurantObj = new restaurantManager();
console.log(restaurantObj.printAllRestaurantNames());
console.log(restaurantObj.filterRestaurantByCity("Pune"));
console.log(restaurantObj.filterRestaurantByCity("Mumbai"));
console.log(restaurantObj.filterRestaurantByCity("Delhi"));
