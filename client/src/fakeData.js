// Temp fake data
const fakeData = [{
  image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages1.jpg',
  user_id: 1,
  comment: 'Must try Crab steamed egg , fresh sashimi , miso black cod , lamb chop, ankimo, uni, toro, the food was cooked perfectly.',
  date: Date.now(),
  helpful: Math.floor(Math.random() * 20),
  not_helpful: Math.floor(Math.random() * 20),
  restaurant_id: 1,
  user_icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users/users1.jpeg',
  userName: 'John A'
},
{
  image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages2.jpg',
  user_id: 2,
  comment: 'We went during dinner and the staff was willing to accommodate our request for udon for our kid - Its supposed to be served only during lunch.',
  date: Date.now(),
  helpful: Math.floor(Math.random() * 20),
  not_helpful: Math.floor(Math.random() * 20),
  restaurant_id: 2,
  user_icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users/users2.jpeg',
  userName: 'Lisa K'
},
{
  image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages3.jpg',
  user_id: 3,
  comment: 'Opening this week in the former Canto do Brasil/Minas spot is NAKAMA Sushi at the edge of Hayes Valley.',
  date: Date.now(),
  helpful: Math.floor(Math.random() * 20),
  not_helpful: Math.floor(Math.random() * 20),
  restaurant_id: 3,
  user_icon: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery-users/users3.jpeg',
  userName: 'Bruce S'
},
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages4.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages5.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages6.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages7.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages8.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages9.jpg' },
{ image_url: 'https://s3.us-east-2.amazonaws.com/team419photo-gallery/foodImages10.jpg' }
];

export default fakeData;
