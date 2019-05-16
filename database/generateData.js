const Sequelize = require('sequelize');
const faker = require('faker');

// create the sequelize instance, omitting the database-name arg
// const sequelize = new Sequelize("", "root", {
//   dialect: "mysql"
// });

// // Create database photo-gallery
// let promise = new Promise(function (resolve, reject) {
//   sequelize.query("DROP DATABASE IF EXISTS photo-gallery;").then(data => {
//     resolve(data);
//   });
// });

// promise.then(sequelize.query("CREATE DATABASE photo-gallery;").then(data => {
//   resolve(data);
// }));

// Create tables: Images, Users, Restaurants

// Image
let id = 0;
let imageUrl = `https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages${Math.floor(Math.random() * 30)}.jpg`;
let userId = Math.floor(Math.random() * 20);
let comment = faker.lorem.paragraph();
let date = faker.date.recent();


// User
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard();

console.log(randomName);
