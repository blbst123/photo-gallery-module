const Sequelize = require('sequelize');
const generateData = require('./generateData.js');

// create the sequelize instance
const sequelize = new Sequelize('photo_gallery', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
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

// Generate random users, restaurants and images
const randomUsers = generateData.generateUsers();
const randomRestaurants = generateData.generateRestaurants();
const randomImages = generateData.generateImages();

Users.sync();
Restaurants.sync();
Images.sync();


// Insert random data into corresponding database
for (let i = 0; i < randomUsers.length; i++) {
  Users.create(randomUsers[i])
    .then((data) => {
      console.log('User added to database', randomUsers[i].name);
    });
}

for (let i = 0; i < randomRestaurants.length; i++) {
  Restaurants.create(randomRestaurants[i])
    .then((data) => {
      console.log('Restaurant added to database', randomRestaurants[i].name);
    });
}

for (let i = 0; i < randomImages.length; i++) {
  Images.create(randomImages[i])
    .then((data) => {
      console.log('Image added to database', randomImages[i].name);
    });
}
