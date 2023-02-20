const express = require('express');
const mongoose  = require('mongoose');
const router = require('./Router');
const fileUpload = require('express-fileupload');


const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('pictures'));
app.use('/router', router);



const PORT = process.env.PORT | 28017;
const DB_URL = 'mongodb://localhost:27017';

const  startApp = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('SERVER STARTED WITH PORT ' + PORT));
    } catch (e) {
        throw new Error(e.message);
    }
}

startApp();
