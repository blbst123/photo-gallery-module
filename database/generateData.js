const generateData = require('./generateDataHelper.js');
const db = require('./databaseFunctions');

// Generate random users, restaurants and images
const randomUsers = generateData.generateUsers();
const randomRestaurants = generateData.generateRestaurants();
const randomImages = generateData.generateImages();

// Insert random data into corresponding database
for (let i = 0; i < randomUsers.length; i++) {
  db.Users.create(randomUsers[i])
    .then((data) => {
      console.log('User added to database', randomUsers[i].name);
    });
}

for (let i = 0; i < randomRestaurants.length; i++) {
  db.Restaurants.create(randomRestaurants[i])
    .then((data) => {
      console.log('Restaurant added to database', randomRestaurants[i].name);
    });
}

for (let i = 0; i < randomImages.length; i++) {
  db.Images.create(randomImages[i])
    .then((data) => {
      console.log('Image added to database', randomImages[i].name);
    });
}
