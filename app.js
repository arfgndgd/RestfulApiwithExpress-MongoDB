const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running')
// })

app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


// posts.js içinde
// app.get('/posts', (req, res) => {
//     res.send('We are on posts');
// });

// Connect To Db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
     },
    
    () => console.log('connected to DB!')
);

app.listen(3000);