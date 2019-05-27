const Sequelize = require('sequelize');
const sequelize = require('./index');

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  friends: Sequelize.INTEGER,
  reviews: Sequelize.INTEGER,
  profile_url: Sequelize.STRING
}, {
  timestamps: false
});

const Images = sequelize.define('images', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image_url: Sequelize.STRING,
  user_id: Sequelize.INTEGER,
  comment: Sequelize.STRING,
  rating: Sequelize.STRING,
  date: Sequelize.DATE,
  helpful: Sequelize.INTEGER,
  not_helpful: Sequelize.INTEGER,
  restaurant_id: Sequelize.INTEGER
}, {
  timestamps: false
});

const Restaurants = sequelize.define('restaurants', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
}, {
  timestamps: false
});

Users.sync();
Restaurants.sync();
Images.sync();

const retrieveImage = function (imageId, callback) {
  Images.findOne({
    where: {
      id: imageId
    }
  }).then((result) => {
    callback(result);
  });
};

const retrieveRestaurantImage = function (restaurantId, callback) {
  Images.findAll({
    where: {
      restaurant_id: restaurantId
    }
  }).then((result) => {
    callback(result);
  });
};

const retrieveUser = function (userId, callback) {
  Users.findOne({
    where: {
      id: userId
    }
  }).then((result) => {
    callback(result);
  });
};

module.exports = {
  Users,
  Restaurants,
  Images,
  retrieveImage,
  retrieveRestaurantImage,
  retrieveUser
};
