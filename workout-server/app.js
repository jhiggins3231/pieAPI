require('dotenv').config();

//Applications
const express = require('express');
const app = express();

//Routes
const workout = require('./controllers/workoutcontroller')
const user = require('./controllers/usercontroller')



const sequelize = require('./db');
sequelize.sync(); 
app.use(express.json());
app.use(require('./middleware/headers'));

//Endpoints
app.use('/workout', workout);
app.use('/auth', user);



app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));







// STATIC FILE EXAMPLE
// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));