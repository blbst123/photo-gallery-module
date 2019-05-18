const Sequelize = require('sequelize');

// create the sequelize instance
const sequelize = new Sequelize('photo_gallery', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  // logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  friends: Sequelize.INTEGER,
  review: Sequelize.INTEGER,
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
  name: Sequelize.STRING,
  photos: Sequelize.INTEGER
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

module.exports = {
  Users,
  Restaurants,
  Images,
  retrieveImage,
  retrieveRestaurantImage
};
