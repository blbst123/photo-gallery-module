/* eslint-disable func-names */
// Create tables: Images, Users, Restaurants
const faker = require('faker');

// Fake Data generation functions
const getProfileUrl = function () {
  const index = Math.floor(Math.random() * 10);
  return `https://s3.us-east-2.amazonaws.com/team419photo-gallery-users/users${index}.jpeg`;
};

const getImageUrl = function () {
  const index = Math.floor(Math.random() * 30);
  return `https://s3.us-east-2.amazonaws.com/team419photo-gallery-preview-images/foodImages${index}.jpg`;
};

module.exports.generateUsers = function (num = 100) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push({
      name: faker.name.findName(),
      rating: Math.floor(Math.random() * 5 + 1),
      friends: Math.floor(Math.random() * 100),
      reviews: Math.floor(Math.random() * 100),
      profile_url: getProfileUrl()
    });
  }

  return arr;
};

module.exports.generateRestaurants = function (num = 100) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push({
      name: faker.company.companyName(),
      photos: Math.floor(Math.random() * 20)
    });
  }

  return arr;
};

module.exports.generateImages = function (num = 1000) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push({
      image_url: getImageUrl(),
      user_id: Math.floor(Math.random() * 99 + 1),
      comment: faker.lorem.sentence(),
      date: faker.date.recent(),
      helpful: Math.floor(Math.random() * 20),
      not_helpful: Math.floor(Math.random() * 20),
      restaurant_id: Math.floor(Math.random() * 99 + 1)
    });
  }

  return arr;
};
