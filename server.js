// entering the command to invoke the app starts the server, mongoose models are synced with mongodb
// opening API GET routes in insomnia for users and thoughts displays proper data
// succesful testing of API POST, PUT, DELETE routes in insomnia

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);