const Sequelize = require('sequelize');

// create the sequelize instance
const sequelize = new Sequelize('photo_gallery', 'root', 'password', {
  host: 'database',
  dialect: 'mysql',
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
